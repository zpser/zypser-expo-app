import React, { useMemo, useCallback } from "react";
import { View } from "react-native";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import { COLORS } from "@/util/constant/colors";
import CategoryGrid, {
  CategoryItem,
} from "@/components/featured-service/CategoryGrid";
import ServiceCard, {
  Service,
} from "@/components/featured-service/ServiceCard";
import ServiceCategoryHeader from "@/components/featured-service/ServiceCategoryHeader";

interface ServiceCategory {
  id: string;
  category: string;
  services: Service[];
}

interface UnifiedServiceScreenProps {
  categoryData: CategoryItem[];
  serviceData: ServiceCategory[];
  onCategoryPress?: (item: CategoryItem) => void;
  onServicePress?: (service: Service) => void;
  onAddPress?: (service: Service) => void;
  onViewDetailsPress?: (service: Service) => void;
  numColumns?: number;
}

type UnifiedItem =
  | { type: "categories"; data: CategoryItem[] }
  | { type: "spacer" }
  | { type: "service-category"; data: string; id: string }
  | {
      type: "service";
      data: Service;
      categoryId: string;
      isLastInCategory: boolean;
    };

const UnifiedServiceScreen: React.FC<UnifiedServiceScreenProps> = ({
  categoryData,
  serviceData,
  onCategoryPress,
  onServicePress,
  onAddPress,
  onViewDetailsPress,
  numColumns = 4,
}) => {
  const unifiedData: UnifiedItem[] = useMemo(() => {
    const result: UnifiedItem[] = [];
    result.push({ type: "categories", data: categoryData });
    serviceData.forEach((category) => {
      result.push({
        type: "service-category",
        data: category.category,
        id: category.id,
      });
      category.services.forEach((service, index) => {
        result.push({
          type: "service",
          data: service,
          categoryId: category.id,
          isLastInCategory: index === category.services.length - 1,
        });
      });
    });
    return result;
  }, [categoryData, serviceData]);

  const handleCategoryPressMemo = useCallback(
    (item: CategoryItem) => onCategoryPress?.(item),
    [onCategoryPress]
  );
  const handleServicePressMemo = useCallback(
    (service: Service) => onServicePress?.(service),
    [onServicePress]
  );
  const handleAddPressMemo = useCallback(
    (service: Service) => onAddPress?.(service),
    [onAddPress]
  );
  const handleViewDetailsPressMemo = useCallback(
    (service: Service) => onViewDetailsPress?.(service),
    [onViewDetailsPress]
  );

  const renderItem = ({ item }: { item: UnifiedItem }) => {
    switch (item.type) {
      case "categories":
        return (
          <CategoryGrid
            categories={item.data}
            numColumns={numColumns}
            onCategoryPress={handleCategoryPressMemo}
          />
        );

      case "service-category":
        return <ServiceCategoryHeader title={item.data} />;
      case "service":
        return (
          <ServiceCard
            service={item.data}
            isLastInCategory={item.isLastInCategory}
            onPress={handleServicePressMemo}
            onAddPress={handleAddPressMemo}
            onViewDetailsPress={handleViewDetailsPressMemo}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1" style={{ backgroundColor: COLORS.background }}>
      <CustomFlashList
        data={unifiedData}
        renderItem={renderItem}
        estimatedItemSize={120}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};

export default UnifiedServiceScreen;

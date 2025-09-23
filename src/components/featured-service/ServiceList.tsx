import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Text } from "@/components/core/text";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import { Icon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

interface Service {
  id: string;
  name: string;
  rating: number;
  reviews: string;
  price: string;
  duration: string;
  image: string;
}

interface ServiceCategory {
  id: string;
  category: string;
  services: Service[];
}

interface ServicesListProps {
  data: ServiceCategory[];
  onServicePress?: (service: Service) => void;
  onAddPress?: (service: Service) => void;
  onViewDetailsPress?: (service: Service) => void;
}

type FlattenedItem =
  | { type: "category"; data: string; id: string }
  | {
      type: "service";
      data: Service;
      categoryId: string;
      isLastInCategory: boolean;
    };

const ServicesList: React.FC<ServicesListProps> = ({
  data,
  onServicePress,
  onAddPress,
  onViewDetailsPress,
}) => {
  // Flatten data for FlashList
  const flattenedData: FlattenedItem[] = data.reduce(
    (acc: FlattenedItem[], category) => {
      // Add category header
      acc.push({
        type: "category",
        data: category.category,
        id: category.id,
      });

      // Add services under this category
      category.services.forEach((service, index) => {
        acc.push({
          type: "service",
          data: service,
          categoryId: category.id,
          isLastInCategory: index === category.services.length - 1,
        });
      });

      return acc;
    },
    []
  );

  const renderServiceItem = (service: Service, isLastInCategory: boolean) => (
    <View>
      <TouchableOpacity
        className="mx-4 py-4"
        onPress={() => onServicePress?.(service)}
      >
        <View className="flex-row items-start">
          <View className="flex-1 pr-4">
            <Text
              variant="callout"
              className="mb-3 font-medium"
              style={{ color: COLORS.textPrimary }}
            >
              {service.name}
            </Text>

            <View className="flex-row items-center mb-3">
              <Icon name="star" size={14} color={COLORS.warning} />
              <Text
                variant="footnote"
                className="ml-1"
                style={{ color: COLORS.textSecondary }}
              >
                {service.rating} ({service.reviews})
              </Text>
            </View>

            <View className="flex-row items-center mb-3">
              <Text
                variant="callout"
                className="font-semibold"
                style={{ color: COLORS.primary }}
              >
                {service.price}
              </Text>
              <Text
                variant="footnote"
                className="ml-2"
                style={{ color: COLORS.textTertiary }}
              >
                • {service.duration}
              </Text>
            </View>

            <TouchableOpacity onPress={() => onViewDetailsPress?.(service)}>
              <Text
                variant="subhead"
                className="underline font-medium"
                style={{ color: COLORS.primary }}
              >
                View Details
              </Text>
            </TouchableOpacity>
          </View>

          <View className="relative">
            <View
              className="w-20 h-16 rounded-lg overflow-hidden"
              style={{ backgroundColor: COLORS.cardBg }}
            >
              <Image
                source={{ uri: service.image }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>

            {/* Add button positioned half on image, half outside */}
            <TouchableOpacity
              className="absolute -bottom-2 -right-2 rounded-full px-3 py-1.5 border shadow-sm"
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary + "50",
              }}
              onPress={() => onAddPress?.(service)}
            >
              <View className="flex-row items-center">
                <Icon name="plus" size={10} color={COLORS.primary} />
                <Text
                  variant="caption1"
                  className="font-medium ml-1"
                  style={{ color: COLORS.primary }}
                >
                  Add
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* Divider line between services in same category */}
      {!isLastInCategory && (
        <View
          className="mx-4 h-px"
          style={{ backgroundColor: COLORS.borderLight }}
        />
      )}
    </View>
  );

  const renderCategoryHeader = (category: string) => (
    <View>
      <View className="h-3" style={{ backgroundColor: COLORS.background }} />
      <View className="mt-6">
        <Text
          variant="title3"
          className="mx-4 font-bold"
          style={{ color: COLORS.textPrimary }}
        >
          {category}
        </Text>
      </View>
    </View>
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: FlattenedItem;
    index: number;
  }) => {
    if (item.type === "category") {
      return renderCategoryHeader(item.data);
    } else {
      return renderServiceItem(item.data, item.isLastInCategory);
    }
  };

  return (
    <View className="flex-1" style={{ backgroundColor: COLORS.white }}>
      <CustomFlashList
        data={flattenedData}
        renderItem={renderItem}
        estimatedItemSize={120}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      />
    </View>
  );
};

export default ServicesList;

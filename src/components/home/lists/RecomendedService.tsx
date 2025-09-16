import React from "react";
import { View, ImageBackground } from "react-native";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import { Ionicon } from "@/components/core/icon";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import SectionTitleBar from "@/components/SectionTitleBar";
import { Service } from "@/@types/home";
import { recommendedServices } from "@/assets/data/home";
import { COLORS } from "@/util/constant/colors";

// Sample data

interface RecommendedForYouProps {
  title?: string;
  data?: Service[];
  onServicePress?: (serviceId: number) => void;
  onViewAllPress?: () => void;
  onAddServicePress?: (serviceId: number) => void;
  loading?: boolean;
  showViewAll?: boolean;
  containerClassName?: string;
  sectionTitleContainerClassName?: string;
  flashListContainerClassName?: string;
}

const RecommendedForYou: React.FC<RecommendedForYouProps> = ({
  title = "Recommended for You",
  data = recommendedServices,
  onServicePress,
  onViewAllPress,
  onAddServicePress,
  loading = false,
  showViewAll = true,
  containerClassName,
  sectionTitleContainerClassName,
  flashListContainerClassName,
}) => {
  const handleServicePress = (serviceId: number) => {
    onServicePress?.(serviceId);
  };

  const handleAddPress = (serviceId: number) => {
    onAddServicePress?.(serviceId);
  };

  // Service Item Component
  const ServiceItem = ({ item }: { item: Service }) => (
    <View className="mr-3" style={{ width: 150 }}>
      <TouchableOpacity onPress={() => handleServicePress(item.id)}>
        {/* Service Image with Add Button */}
        <View className="relative mb-4">
          <ImageBackground
            source={{ uri: item.image }}
            className="w-[150px] h-[150px] rounded-xl overflow-hidden bg-gray-200"
            style={{ borderRadius: 12 }}
          >
            {/* Add Button */}
            <TouchableOpacity
              className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full items-center justify-center shadow-lg"
              onPress={() => handleAddPress(item.id)}
            >
              <Ionicon name="add" size={12} color={COLORS.primary} />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* Service Details */}
        <View className="gap-1.5">
          {/* Service Title */}
          <Text
            variant="footnote"
            className="text-gray-900 font-medium"
            numberOfLines={1}
          >
            {item.title}
          </Text>

          {/* Rating */}
          <View className="flex-row items-center gap-1">
            <Ionicon name="star" size={14} color="#F4B300" />
            <Text variant="caption2" className="text-gray-600">
              {`${item.rating} (${item.reviewCount})`}
            </Text>
          </View>

          {/* Price */}
          <Text variant="footnote" className="text-primaryButton font-medium">
            {`$${item.price}`}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className={`bg-white py-6 ${containerClassName || ""}`}>
      {/* Header using SectionTitleBar */}
      <SectionTitleBar
        showViewAll={showViewAll}
        title={title}
        onViewAllPress={onViewAllPress}
        containerClassName={sectionTitleContainerClassName || "mb-4 px-4"}
      />

      {/* Horizontal List using CustomFlashList */}
      <View className="">
        <CustomFlashList
          data={data}
          renderItem={({ item }) => <ServiceItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          containerClassName={flashListContainerClassName || "px-4 pr-0"}
          loading={loading}
          emptyText="No recommended services available"
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingRight: 16,
          }}
        />
      </View>
    </View>
  );
};

export default RecommendedForYou;

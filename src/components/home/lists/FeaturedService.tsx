import React from "react";
import { View, ImageBackground } from "react-native";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import { LinearGradient } from "expo-linear-gradient";
import CustomSvg from "@/components/core/svg/CustomSvg";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import SectionTitleBar from "@/components/SectionTitleBar";

// Sample featured services data
const featuredServices = [
  {
    id: 1,
    title: "Carpenter Repair",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
  {
    id: 2,
    title: "Lawn Mowing",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
  {
    id: 3,
    title: "Handyman",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
];

interface FeaturedServicesProps {
  onServicePress?: (serviceId: number) => void;
  onViewAllPress?: () => void;
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onServicePress,
  onViewAllPress,
}) => {
  const handleServicePress = (serviceId: number) => {
    onServicePress?.(serviceId);
  };

  const handleViewAllPress = () => {
    onViewAllPress?.();
  };

  const renderServiceItem = ({
    item,
  }: {
    item: (typeof featuredServices)[0];
  }) => (
    <View className="mr-3" style={{ width: 130 }}>
      <TouchableOpacity onPress={() => handleServicePress(item.id)}>
        {/* Service Image */}
        <View className="mb-3">
          <View className="relative">
            <ImageBackground
              source={{ uri: item.image }}
              style={{
                width: 130,
                height: 160,
                borderRadius: 12,
                overflow: "hidden",
              }}
              imageStyle={{
                borderRadius: 12,
              }}
            >
              {/* Gradient Overlay */}
              <LinearGradient
                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.2)"]}
                locations={[0, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  flex: 1,
                  borderRadius: 12,
                }}
              />
            </ImageBackground>
          </View>
        </View>

        {/* Service Title */}
        <View style={{}}>
          <Text
            variant="footnote"
            className="text-gray-900 font-medium"
            numberOfLines={1}
            style={{ textAlign: "left" }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="bg-white px-4 py-6 pr-0">
      {/* Header - Replaced with SectionTitleBar */}
      <SectionTitleBar
        title="Featured Services"
        onViewAllPress={handleViewAllPress}
        containerClassName="mb-4 pr-4"
      />

      {/* Horizontal List - Replaced with CustomFlashList */}
      <View style={{}}>
        <CustomFlashList
          data={featuredServices}
          renderItem={renderServiceItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingRight: 16 }}
        />
      </View>
    </View>
  );
};

export default FeaturedServices;

import React from "react";
import { View, ScrollView, ImageBackground, Dimensions } from "react-native";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import { Ionicon } from "@/components/core/icon";

const { width } = Dimensions.get("window");

// Sample recommended services data
const recommendedServices = [
  {
    id: 1,
    title: "Switch Socket Repair",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop",
    rating: 4.8,
    reviewCount: "12.3k",
    price: 49,
  },
  {
    id: 3,
    title: "Tap Repair",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop",
    rating: 4.8,
    reviewCount: "12.3k",
    price: 49,
  },
  {
    id: 4,
    title: "AC Service",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop",
    rating: 4.9,
    reviewCount: "8.5k",
    price: 65,
  },
];

interface RecommendedForYouProps {
  onServicePress?: (serviceId: number) => void;
  onViewAllPress?: () => void;
  onAddServicePress?: (serviceId: number) => void;
}

const RecommendedForYou: React.FC<RecommendedForYouProps> = ({
  onServicePress,
  onViewAllPress,
  onAddServicePress,
}) => {
  const handleServicePress = (serviceId: number) => {
    onServicePress?.(serviceId);
  };

  const handleViewAllPress = () => {
    onViewAllPress?.();
  };

  const handleAddPress = (serviceId: number) => {
    onAddServicePress?.(serviceId);
  };

  return (
    <View
      className="bg-white px-4 py-6 pr-0"
      style={{
      }}
    >
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6 pr-4">
        <Text variant="heading" className="text-gray-900 font-bold">
          Recommended for You
        </Text>
        <TouchableOpacity
          className="px-3 py-2 rounded-full bg-gray-100 border border-gray-200"
          onPress={handleViewAllPress}
        >
          <Text variant="caption1" className="text-gray-900 font-medium">
            View All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll View */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 0, paddingRight: 16 }}
      >
        <View className="flex-row">
          {recommendedServices.map((service, index) => (
            <View
              key={service.id}
              className={`mr-3 ${index === 0 ? "ml-0" : ""}`} // Remove left margin for first item
              style={{ width: 150 }}
            >
              <TouchableOpacity onPress={() => handleServicePress(service.id)}>
                {/* Service Image with Add Button */}
                <View className="relative mb-4">
                  <ImageBackground
                    source={{ uri: service.image }}
                    className="w-[150px] h-[150px] rounded-xl overflow-hidden"
                    style={{
                      borderRadius: 12,
                    }}
                  >
                    {/* Add Button */}
                    <TouchableOpacity
                      className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full items-center justify-center"
                      style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.48,
                        shadowRadius: 8.47,
                        elevation: 8,
                      }}
                      onPress={() => handleAddPress(service.id)}
                    >
                      <Ionicon name="add" size={12} color="#7D4DEE" />
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
                    {service.title}
                  </Text>

                  {/* Rating */}
                  <View className="flex-row items-center gap-1">
                    <Ionicon name="star" size={14} color="#F4B300" />
                    <Text
                      variant="caption2"
                      className="text-gray-900 opacity-60"
                    >
                      {`${service.rating} (${service.reviewCount})`}
                    </Text>
                  </View>

                  {/* Price */}
                  <Text
                    variant="footnote"
                    className="text-primaryButton font-medium"
                  >
                    {`$${service.price}`}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecommendedForYou;

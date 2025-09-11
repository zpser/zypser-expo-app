import React from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import { LinearGradient } from "expo-linear-gradient";
import CustomSvg from "@/components/core/svg/CustomSvg";

// Sample featured services data
const featuredServices = [
  {
    id: 1,
    title: "Carpenter Repair",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
  {
    id: 2,
    title: "Lawn Mowing",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
    svgIcon: "carpenter",
  },
  {
    id: 3,
    title: "Handyman",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
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

  return (
    <View
      className="bg-white px-4 py-6 pr-0"
    >
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6 pr-4" >
        <Text variant="heading" className="text-gray-900 font-bold">
          Featured Services
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
        contentContainerStyle={{ paddingRight: 0 }}
        style={{ }}
      >
        <View className="flex-row">
          {featuredServices.map((service, index) => (
            <View
              key={service.id}
              className="mr-3"
              style={{ width: 130 }}
            >
              <TouchableOpacity onPress={() => handleServicePress(service.id)}>
                {/* Service Image */}
                <View className="mb-3">
                  <View className="relative">
                    <ImageBackground
                      source={{ uri: service.image }}
                      style={{
                        width: 130,
                        height: 160,
                        borderRadius: 12,
                        overflow: 'hidden',
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
                <View style={{  }}>
                  <Text
                    variant="footnote"
                    className="text-gray-900 font-medium"
                    numberOfLines={1}
                    style={{ textAlign: 'left' }}
                  >
                    {service.title}
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

export default FeaturedServices;
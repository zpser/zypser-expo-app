import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";

interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
  color: string;
}

interface PopularServiceProps {
  services: ServiceCategory[];
  onServicePress?: (serviceId: number) => void;
  onViewAllPress?: () => void;
  animatedStyle?: any;
  headerHeight: number;
}

const PopularService: React.FC<PopularServiceProps> = ({
  services,
  onServicePress,
  onViewAllPress,
  animatedStyle,
  headerHeight,
}) => {
  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <View className="flex-1">
        {/* Section Header */}
        <View
          className="flex-row justify-between items-center mb-4"
          style={{ height: headerHeight }}
        >
          <Text variant="heading" className="text-white font-bold">
            Popular Services
          </Text>
          <TouchableOpacity
            className="px-3 py-1.5 rounded-full border border-white/20"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.09)" }}
            onPress={onViewAllPress}
          >
            <Text variant="caption1" className="text-white font-medium">
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {/* Services Grid */}
        <View className="flex-row flex-wrap justify-between pb-4">
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              className="w-[30%] mb-4"
              onPress={() => onServicePress?.(service.id)}
            >
              <View className="bg-gray-100 rounded-xl p-3 items-center justify-center h-20 mb-2">
                <Text className="text-4xl">{service.icon}</Text>
              </View>
              <Text
                variant="caption1"
                className="text-white font-medium text-center opacity-90"
                numberOfLines={1}
              >
                {service.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

export default PopularService;
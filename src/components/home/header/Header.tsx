import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import { Ionicon } from "@/components/core/icon";

interface HomeHeaderProps {
  location?: string;
  onLocationPress?: () => void;
  onNotificationPress?: () => void;
  onCartPress?: () => void;
  height: number;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  location = "12 Ravenhall, Melbourne",
  onLocationPress,
  onNotificationPress,
  onCartPress,
  height,
}) => {
  return (
    <View
      className="flex-row justify-between items-center mb-4"
      style={{ height }}
    >
      <View className="flex-row items-center flex-1">
        <TouchableOpacity 
          className="mr-3 p-2 rounded-full"
          onPress={onLocationPress}
        >
          <Ionicon
            name="location-outline"
            size={16}
            color="#7D4DEE"
          />
        </TouchableOpacity>
        <Text variant="subhead" className="text-white font-medium">
          {location}
        </Text>
        <View className="w-4 h-4 ml-1">
          <Ionicon name="chevron-down" size={16} color="#FFFFFF" />
        </View>
      </View>

      <View className="flex-row items-center gap-2">
        <TouchableOpacity
          className="w-8 h-8 bg-white rounded-full items-center justify-center"
          onPress={onNotificationPress}
        >
          <Ionicon
            name="notifications-outline"
            size={16}
            color="#7D4DEE"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-8 h-8 bg-white rounded-full items-center justify-center"
          onPress={onCartPress}
        >
          <Ionicon name="bag-outline" size={16} color="#7D4DEE" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
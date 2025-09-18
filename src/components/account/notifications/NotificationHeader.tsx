import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";
import { router } from "expo-router";

const NotificationHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-8 h-8 rounded-full items-center justify-center"
        style={{ backgroundColor: `${COLORS.primary}10` }}
      >
        <Ionicon name="arrow-back" size={20} color={COLORS.primary} />
      </TouchableOpacity>

      <Text variant="title2" className="font-semibold text-primaryText">
        Notifications
      </Text>

      <View className="w-8" />
    </View>
  );
};

export default NotificationHeader;

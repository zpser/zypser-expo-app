import { View } from "react-native";
import React from "react";
import { Text } from "@/components/core/text";
import { router } from "expo-router";
import { TouchableOpacity } from "@/components/core/button";

const NotificationsScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <Text variant="title1" className="mb-4">
        Notifications
      </Text>
      <Text variant="body" className="mb-4">
        Notification preferences and settings
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-blue-500 py-3 px-6 rounded-lg items-center"
      >
        <Text className="text-white font-semibold">Back to Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationsScreen;

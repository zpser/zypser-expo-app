import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface SocialLoginProps {
  onGooglePress: () => void;
  onApplePress: () => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  onGooglePress,
  onApplePress,
}) => {
  return (
    <View>
      {/* Divider */}
      <View className="flex-row items-center mb-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-4 text-gray-500">or</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity
        className="flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4 mb-4"
        onPress={onGooglePress}
      >
        <Text className="text-2xl mr-3">G</Text>
        <Text className="text-gray-700 font-medium text-lg">
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4 mb-8"
        onPress={onApplePress}
      >
        <Text className="text-2xl mr-3">🍎</Text>
        <Text className="text-gray-700 font-medium text-lg">
          Continue with Apple
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

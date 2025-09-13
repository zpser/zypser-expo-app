import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import CustomSvg from "@/components/core/svg/CustomSvg";

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
        <Text variant="body" className="mx-4 text-gray-500">
          or
        </Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity
        className="flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4 mb-4"
        onPress={onGooglePress}
      >
        <CustomSvg name="google" width={24} height={24} className="mr-3" />
        <Text variant="callout" className="text-gray-700 font-medium">
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4 mb-8"
        onPress={onApplePress}
      >
        <CustomSvg name="apple" width={24} height={24} className="mr-3" />
        <Text variant="callout" className="text-gray-700 font-medium">
          Continue with Apple
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

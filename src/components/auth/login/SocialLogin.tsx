import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "@/components/core/button/touchable-opacity";
import { Text } from "@/components/core/text";
import CustomSvg from "@/components/core/svg/CustomSvg";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";
import { LoginMethod } from "@/@types/login";

interface SocialLoginProps {
  onGooglePress: () => void;
  onApplePress: () => void;
  loginMethod: LoginMethod;
  onToggleMethod: (method: LoginMethod) => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  onGooglePress,
  onApplePress,
  loginMethod,
  onToggleMethod,
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

      <TouchableOpacity
        className="flex-row items-center justify-center bg-socialButton rounded-full py-3 mb-2"
        onPress={onApplePress}
      >
        <CustomSvg name="apple" width={24} height={24} className="mr-3" />
        <Text variant="callout" className="text-gray-700 font-medium">
          Continue with Apple
        </Text>
      </TouchableOpacity>

      {/* Social Login Buttons */}
      <TouchableOpacity
        className="flex-row items-center justify-center bg-socialButton rounded-full py-3 mb-2"
        onPress={onGooglePress}
      >
        <CustomSvg name="google" width={24} height={24} className="mr-3" />
        <Text variant="callout" className="text-gray-700 font-medium">
          Continue with Google
        </Text>
      </TouchableOpacity>

      {/* Toggle between Email and Phone */}
      <TouchableOpacity
        className="flex-row items-center justify-center bg-socialButton rounded-full py-3 mb-4"
        onPress={() =>
          onToggleMethod(
            loginMethod === "phone"
              ? ("email" as LoginMethod)
              : ("phone" as LoginMethod)
          )
        }
      >
        {loginMethod === "phone" ? (
          <Ionicon
            name="mail-sharp"
            size={22}
            color={COLORS.primaryText}
            style={{ marginRight: 12 }}
          />
        ) : (
          <Ionicon
            name="call"
            size={20}
            color={COLORS.primaryText}
            style={{ marginRight: 12 }}
          />
        )}
        <Text variant="callout" className="text-gray-700 font-medium">
          {loginMethod === "phone"
            ? "Continue with Email"
            : "Continue with Phone"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

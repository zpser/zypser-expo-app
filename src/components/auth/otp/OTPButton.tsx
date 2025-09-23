import { COLORS } from "@/util/constant/colors";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface OTPButtonProps {
  onPress: () => void;
  otpLength: number;
  isLoading: boolean;
}

const OTPButton: React.FC<OTPButtonProps> = ({
  onPress,
  otpLength,
  isLoading,
}) => {
  const isEnabled = otpLength === 6 && !isLoading;

  return (
    <TouchableOpacity
      className="rounded-full py-4 mb-6"
      onPress={onPress}
      disabled={!isEnabled}
      style={{
        backgroundColor: isEnabled ? COLORS.primary : "rgba(125, 77, 238, 0.3)",
      }}
    >
      <Text
        className={`text-center font-semibold text-lg ${
          isEnabled ? "text-white" : "text-white/70"
        }`}
      >
        {isLoading ? "Verifying..." : "Continue"}
      </Text>
    </TouchableOpacity>
  );
};

export default OTPButton;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ContinueButtonProps {
  onPress: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  onPress,
  isLoading,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      className={`rounded-full py-4 mb-6 ${
        isLoading || disabled ? "bg-primaryButton/70" : "bg-primaryButton"
      }`}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      <Text className="text-white text-center font-semibold text-lg">
        {isLoading ? "Sending..." : "Continue"}
      </Text>
    </TouchableOpacity>
  );
};

export default ContinueButton;

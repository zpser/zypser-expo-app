import { COLORS } from "@/util/constant/colors";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ProfileButtonProps {
  onPress: () => void;
  nameValue: string;
  isLoading: boolean;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
  onPress,
  nameValue,
  isLoading,
}) => {
  const isEnabled = nameValue.trim().length >= 2 && !isLoading;

  return (
    <TouchableOpacity
      className={`rounded-full py-4 ${
        isEnabled ? "bg-primaryButton" : "bg-primaryButton/30"
      }`}
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
        {isLoading ? "Saving..." : "Continue"}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileButton;

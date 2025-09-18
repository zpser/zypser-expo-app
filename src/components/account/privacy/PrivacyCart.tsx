import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import AccountToggle from "../AccountToggle";

interface PrivacyCartProps {
  title: string;
  description: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const PrivacyCart: React.FC<PrivacyCartProps> = ({
  title,
  description,
  isEnabled,
  onToggle,
}) => {
  return (
    <View className="mx-2 mb-2">
      <View
        className="bg-white rounded-xl px-4 py-3"
        style={{
          borderWidth: 1,
          borderColor: COLORS.borderLight,
        }}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text
              variant="footnote"
              className="font-medium mb-1"
              style={{ color: COLORS.primary }}
            >
              {title}
            </Text>
            <Text variant="footnote" style={{ color: COLORS.secondaryText }}>
              {description}
            </Text>
          </View>
          <AccountToggle isEnabled={isEnabled} onToggle={onToggle} />
        </View>
      </View>
    </View>
  );
};

export default PrivacyCart;

import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import AccountToggle from "../AccountToggle";

interface NotificationCartProps {
  title: string;
  description: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const NotificationCart: React.FC<NotificationCartProps> = ({
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
          //   shadowColor: COLORS.black,
          //   shadowOffset: { width: 0, height: 2 },
          //   shadowOpacity: 0.1,
          //   shadowRadius: 4,
          //   elevation: 2,
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

export default NotificationCart;

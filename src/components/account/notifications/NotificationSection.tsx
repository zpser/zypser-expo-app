import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import NotificationCart from "./NotificationCart";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

interface NotificationSectionProps {
  title: string;
  items: NotificationItem[];
  onToggle: (id: string) => void;
}

const NotificationSection: React.FC<NotificationSectionProps> = ({
  title,
  items,
  onToggle,
}) => {
  return (
    <View className="mb-6">
      <Text
        variant="caption1"
        className=" font-medium tracking-wider uppercase px-2 py-3"
        style={{ color: COLORS.secondaryText }}
      >
        {title}
      </Text>
      {items.map((item) => (
        <NotificationCart
          key={item.id}
          title={item.title}
          description={item.description}
          isEnabled={item.isEnabled}
          onToggle={() => onToggle(item.id)}
        />
      ))}
    </View>
  );
};

export default NotificationSection;

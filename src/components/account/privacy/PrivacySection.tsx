import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import PrivacyCart from "./PrivacyCart";

export interface PrivacyItem {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

interface PrivacySectionProps {
  title: string;
  items: PrivacyItem[];
  onToggle: (id: string) => void;
}

const PrivacySection: React.FC<PrivacySectionProps> = ({
  title,
  items,
  onToggle,
}) => {
  return (
    <View className="mb-6">
      <Text
        variant="caption1"
        className="font-semibold tracking-wider uppercase px-2 py-3"
        style={{ color: COLORS.secondaryText }}
      >
        {title}
      </Text>
      {items.map((item) => (
        <PrivacyCart
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

export default PrivacySection;

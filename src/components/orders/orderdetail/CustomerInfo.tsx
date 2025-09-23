import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface CustomerInfoProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between items-center">
    <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
      {label}
    </Text>
    <Text
      variant="subhead"
      className="font-normal"
      style={{ color: COLORS.primaryText }}
    >
      {value}
    </Text>
  </View>
);

export const CustomerInfo: React.FC<CustomerInfoProps> = ({
  customerName,
  customerEmail,
  customerPhone,
}) => {
  return (
    <View className="px-4 mb-8">
      <Text
        variant="heading"
        className="mb-4 text-base"
        style={{ color: COLORS.primaryText }}
      >
        Customer Information
      </Text>

      <View className="gap-4">
        <InfoRow label="Customer" value={customerName} />
        <InfoRow label="Email" value={customerEmail} />
        <InfoRow label="Phone" value={customerPhone} />
      </View>
    </View>
  );
};

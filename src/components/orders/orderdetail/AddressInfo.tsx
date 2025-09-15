import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface AddressInfoProps {
  customerName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export const AddressInfo: React.FC<AddressInfoProps> = ({
  customerName,
  address,
  city,
  state,
  zipCode,
}) => {
  return (
    <View className="px-4 flex-row gap-4">
      <View className="flex-1">
        <Text
          variant="heading"
          className="mb-4 text-base"
          style={{ color: COLORS.primaryText }}
        >
          Address Information
        </Text>
        <View className="gap-1">
          <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
            {customerName}
          </Text>
          <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
            {address}
          </Text>
          <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
            {city}, {state} {zipCode}
          </Text>
        </View>
      </View>

      <View className="flex-1">
        <Text
          variant="heading"
          className="mb-4 text-base"
          style={{ color: COLORS.primaryText }}
        >
          Billing Address
        </Text>
        <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
          Same as address information
        </Text>
      </View>
    </View>
  );
};

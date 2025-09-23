import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface OrderItem {
  name: string;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const PriceRow = ({ label, value }: { label: string; value: number }) => (
  <View className="flex-row justify-between items-center">
    <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
      {label}
    </Text>
    <Text
      variant="subhead"
      className="font-normal"
      style={{ color: COLORS.primaryText }}
    >
      ${value.toFixed(2)}
    </Text>
  </View>
);

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  shipping,
  tax,
  total,
}) => {
  return (
    <View className="px-4 mb-8">
      <Text
        variant="heading"
        className="mb-4 text-base"
        style={{ color: COLORS.primaryText }}
      >
        Order Details
      </Text>

      <View className="gap-3">
        {items.map((item, index) => (
          <View key={index} className="flex-row justify-between items-center">
            <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
              {item.name}
            </Text>
            <Text
              variant="subhead"
              className="font-normal"
              style={{ color: COLORS.primaryText }}
            >
              ${item.price.toFixed(2)}
            </Text>
          </View>
        ))}

        <View
          className="h-px my-2"
          style={{ backgroundColor: COLORS.borderLight }}
        />

        <PriceRow label="Subtotal" value={subtotal} />
        <PriceRow label="Shipping" value={shipping} />
        <PriceRow label="Tax" value={tax} />

        <View
          className="h-px my-2"
          style={{ backgroundColor: COLORS.borderLight }}
        />

        <View className="flex-row justify-between items-center">
          <Text
            variant="callout"
            className="font-medium"
            style={{ color: COLORS.secondaryText }}
          >
            Total Price
          </Text>
          <Text
            variant="callout"
            className="font-bold"
            style={{ color: COLORS.primaryText }}
          >
            ${total.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

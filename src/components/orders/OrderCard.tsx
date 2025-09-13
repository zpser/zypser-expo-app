// components/orders/OrderCard.tsx
import React, { memo } from "react";
import { View, Image } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import { TouchableOpacity } from "../core/button";
import { OrderStatus, STATUS_CONFIG } from "@/@types/order";

interface OrderCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  status: OrderStatus;
  amount: string;
  iconUrl?: string;
  onPress?: () => void;
  className?: string;
}

const OrderCardContent = memo<Omit<OrderCardProps, "onPress">>(
  ({ title, date, time, status, amount, iconUrl, className = "" }) => {
    const statusConfig = STATUS_CONFIG[status];

    return (
      <View className={`bg-white rounded-xl p-4 mb-4 shadow-sm ${className}`}>
        {/* Order Header */}
        <View className="flex-row items-start mb-4">
          <View className="w-12 h-12 rounded-xl bg-allStone items-center justify-center mr-3 overflow-hidden">
            {iconUrl ? (
              <Image
                source={{ uri: iconUrl }}
                className="w-6 h-6"
                resizeMode="contain"
              />
            ) : (
              <View className="w-6 h-6 bg-allStone rounded" />
            )}
          </View>
          <View className="flex-1">
            <Text
              variant="heading"
              className="mb-1"
              style={{ color: COLORS.primaryText }}
            >
              {title}
            </Text>
            <Text variant="footnote" style={{ color: COLORS.secondaryText }}>
              {date} • {time}
            </Text>
          </View>
        </View>

        {/* Order Footer */}
        <View className="flex-row justify-between items-center pt-4 border-t border-gray-100">
          <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
            Status:{" "}
            <Text
              variant="subhead"
              className="font-medium"
              style={{ color: statusConfig.color }}
            >
              {statusConfig.label}
            </Text>
          </Text>
          <Text
            variant="subhead"
            className="font-medium"
            style={{ color: COLORS.primary }}
          >
            {amount}
          </Text>
        </View>
      </View>
    );
  }
);

OrderCardContent.displayName = "OrderCardContent";

export const OrderCard = memo<OrderCardProps>(({ onPress, ...props }) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <OrderCardContent {...props} />
      </TouchableOpacity>
    );
  }

  return <OrderCardContent {...props} />;
});

OrderCard.displayName = "OrderCard";

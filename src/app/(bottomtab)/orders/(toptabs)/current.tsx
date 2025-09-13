import React, { useMemo, useCallback } from "react";
import { View } from "react-native";
import { COLORS } from "@/util/constant/colors";
import { OrderStatus, OrderItem } from "@/@types/order";
import { OrderCard } from "@/components/orders/OrderCard";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import { CURRENT_ORDERS } from "@/assets/data/order";
import { router } from "expo-router";

export default function CurrentOrders() {
  const handleOrderPress = useCallback((orderId: string) => {
    router.push(`/orders/${orderId}`);
    console.log("Order pressed:", orderId);
  }, []);

  // Sort orders: InProgress first, then Scheduled
  const sortedOrders = useMemo(() => {
    return CURRENT_ORDERS.sort((a, b) => {
      if (
        a.status === OrderStatus.InProgress &&
        b.status === OrderStatus.Scheduled
      ) {
        return -1; // InProgress comes first
      }
      if (
        a.status === OrderStatus.Scheduled &&
        b.status === OrderStatus.InProgress
      ) {
        return 1; // Scheduled comes second
      }
      return 0; // Same status, maintain original order
    });
  }, []);

  const renderOrderItem = useCallback(
    ({ item, index }: { item: OrderItem; index: number }) => {
      // Check if we need to add divider before this item
      const previousItem = sortedOrders[index - 1];
      const showDivider =
        previousItem &&
        previousItem.status === OrderStatus.InProgress &&
        item.status === OrderStatus.Scheduled;

      return (
        <View>
          {showDivider && (
            <View className="mx-2 mb-6 mt-2">
              <View
                className="h-px"
                style={{ backgroundColor: `${COLORS.primaryText}20` }}
              />
            </View>
          )}
          <OrderCard
            id={item.id}
            title={item.title}
            date={item.date}
            time={item.time}
            status={item.status}
            amount={item.amount}
            iconUrl={item.iconUrl}
            onPress={() => handleOrderPress(item.id)}
          />
        </View>
      );
    },
    [handleOrderPress, sortedOrders]
  );

  const keyExtractor = useCallback((item: OrderItem) => item.id, []);

  return (
    <CustomFlashList
      data={sortedOrders}
      renderItem={renderOrderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={120}
      contentContainerStyle={{ padding: 16 }}
      emptyText="No current orders found"
      showsVerticalScrollIndicator={false}
    />
  );
}

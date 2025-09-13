// app/(bottomtab)/orders/canceled.tsx
import React, { useMemo, useCallback } from "react";
import { COLORS } from "@/util/constant/colors";
import { OrderStatus, OrderItem } from "@/@types/order";
import { OrderCard } from "@/components/orders/OrderCard";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import { CANCELED_ORDERS } from "@/assets/data/order";
import { router } from "expo-router";

export default function CanceledOrders() {
  const handleOrderPress = useCallback((orderId: string) => {
    router.push(`/orders/${orderId}`);

    console.log("Canceled order pressed:", orderId);
    // Navigate to order details
  }, []);

  const renderOrderItem = useCallback(
    ({ item }: { item: OrderItem }) => (
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
    ),
    [handleOrderPress]
  );

  const keyExtractor = useCallback((item: OrderItem) => item.id, []);

  return (
    <CustomFlashList
      data={CANCELED_ORDERS}
      renderItem={renderOrderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={120}
      contentContainerStyle={{ padding: 16 }}
      emptyText="No canceled orders found"
      showsVerticalScrollIndicator={false}
    />
  );
}

// app/(bottomtab)/orders/past.tsx
import { OrderItem } from "@/@types/order";
import { PAST_ORDERS } from "@/assets/data/order";
import CustomFlashList from "@/components/core/list/CustomFlashList";
import { OrderCard } from "@/components/orders/OrderCard";
import { getOrderDetailRoute } from "@/util/constant/routes";
import { router } from "expo-router";
import { useCallback } from "react";

export default function PastOrders() {
  const handleOrderPress = useCallback((orderId: string) => {
    router.push(getOrderDetailRoute(orderId));

    console.log("Past order pressed:", orderId);
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
      data={PAST_ORDERS}
      renderItem={renderOrderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={120}
      contentContainerStyle={{ padding: 16 }}
      emptyText="No past orders found"
      showsVerticalScrollIndicator={false}
    />
  );
}

// app/orders/[orderId].tsx
import React, { useMemo } from "react";
import { View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { COLORS } from "@/util/constant/colors";
import { OrderStatus, OrderItem } from "@/@types/order";
import { OrderHeader, OrderContent } from "@/components/orders/orderdetail";
import { MOCK_ORDER } from "@/assets/data/order";

// Mock order data (same as before)

export default function OrderDetailScreen() {
  const { orderId } = useLocalSearchParams();

  const order = useMemo(() => {
    return MOCK_ORDER;
  }, [orderId]);

  const handleReorderService = () => {
    console.log("Reorder service");
  };

  const handleGetHelp = () => {
    console.log("Get help");
  };

  const handleReportIssue = () => {
    console.log("Report issue");
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View className="flex-1" style={{ backgroundColor: COLORS.white }}>
      <OrderHeader imageUrl={order.iconUrl} onBackPress={handleBackPress} />

      <OrderContent
        title={order.title}
        date={order.date}
        time={order.time}
        status={order.status}
        instructionNote={order.instructionNote}
        customerName={order.customerName}
        customerEmail={order.customerEmail}
        customerPhone={order.customerPhone}
        address={order.address}
        city={order.city}
        state={order.state}
        zipCode={order.zipCode}
        items={order.items}
        subtotal={order.subtotal}
        shipping={order.shipping}
        tax={order.tax}
        total={order.total}
        onReorderService={handleReorderService}
        onGetHelp={handleGetHelp}
        onReportIssue={handleReportIssue}
      />
    </View>
  );
}

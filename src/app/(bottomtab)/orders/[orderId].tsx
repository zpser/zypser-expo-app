import { MOCK_ORDER } from "@/assets/data/order";
import { OrderContent, OrderHeader } from "@/components/orders/orderdetail";
import { COLORS } from "@/util/constant/colors";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";

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
        order={order}
        onReorderService={handleReorderService}
        onGetHelp={handleGetHelp}
        onReportIssue={handleReportIssue}
      />
    </View>
  );
}

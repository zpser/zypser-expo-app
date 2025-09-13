import CustomHeader from "@/components/core/header";
import { COLORS } from "@/util/constant/colors";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";

export default function OrderDetailScreen() {
  const { orderId } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CustomHeader
        title={`Order #${orderId}`}
        backgroundColor="white"
        textColor={COLORS.primaryText}
        statusBarStyle="dark"
        showBackButton={true}
        onBackPress={() => router.back()}
      />

      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-xl font-semibold">Order Details</Text>
          <Text>Order ID: {orderId}</Text>
          {/* Add your order detail content here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

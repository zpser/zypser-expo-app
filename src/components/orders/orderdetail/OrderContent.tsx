import React from "react";
import { View, ScrollView } from "react-native";
import { COLORS } from "@/util/constant/colors";
import { ServiceInfo } from "./ServiceInfo";
import { ActionButtons } from "./ActionButtons";
import { CustomerInfo } from "./CustomerInfo";
import { OrderSummary } from "./OrderSummary";
import { AddressInfo } from "./AddressInfo";
import { OrderStatus } from "@/@types/order";

interface OrderItem {
  name: string;
  price: number;
}

interface Order {
  id: string;
  title: string;
  date: string;
  time: string;
  status: OrderStatus;
  amount: string;
  iconUrl: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  instructionNote?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

interface OrderContentProps {
  order: Order;
  onReorderService: () => void;
  onGetHelp: () => void;
  onReportIssue: () => void;
}

export const OrderContent: React.FC<OrderContentProps> = ({
  order,
  onReorderService,
  onGetHelp,
  onReportIssue,
}) => {
  return (
    <View className="flex-1">
      {/* Fixed Header with rounded top corners */}
      <View
        className="flex-1"
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          marginTop: -24, // Overlap with the image
        }}
      >
        <ScrollView
          className="flex-1 "
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <ServiceInfo
            title={order.title}
            date={order.date}
            time={order.time}
            status={order.status}
            instructionNote={order.instructionNote}
          />

          <ActionButtons
            onReorderService={onReorderService}
            onGetHelp={onGetHelp}
            onReportIssue={onReportIssue}
          />

          <View
            style={{
              backgroundColor: COLORS.cardBg,
              paddingVertical: 20,
              paddingHorizontal: 8,
            }}
          >
            <CustomerInfo
              customerName={order.customerName}
              customerEmail={order.customerEmail}
              customerPhone={order.customerPhone}
            />

            <OrderSummary
              items={order.items}
              subtotal={order.subtotal}
              shipping={order.shipping}
              tax={order.tax}
              total={order.total}
            />

            <AddressInfo
              customerName={order.customerName}
              address={order.address}
              city={order.city}
              state={order.state}
              zipCode={order.zipCode}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

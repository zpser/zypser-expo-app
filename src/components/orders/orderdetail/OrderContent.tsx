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

interface OrderContentProps {
  title: string;
  date: string;
  time: string;
  status: OrderStatus;
  instructionNote?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  onReorderService: () => void;
  onGetHelp: () => void;
  onReportIssue: () => void;
}

export const OrderContent: React.FC<OrderContentProps> = ({
  title,
  date,
  time,
  status,
  instructionNote,
  customerName,
  customerEmail,
  customerPhone,
  address,
  city,
  state,
  zipCode,
  items,
  subtotal,
  shipping,
  tax,
  total,
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
            title={title}
            date={date}
            time={time}
            status={status}
            instructionNote={instructionNote}
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
              customerName={customerName}
              customerEmail={customerEmail}
              customerPhone={customerPhone}
            />

            <OrderSummary
              items={items}
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />

            <AddressInfo
              customerName={customerName}
              address={address}
              city={city}
              state={state}
              zipCode={zipCode}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

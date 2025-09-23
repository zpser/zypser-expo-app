import React, { forwardRef } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import CustomBottomSheet, {
  CustomBottomSheetRef,
} from "@/components/core/bottomsheet/CustomBottomSheet";
import ServiceHeader from "./ServiceHeader";
import ServiceCoverPromise from "./ServiceCoverPromise";
import ServiceProcessSteps from "./ServiceProcessSteps";
import ServiceFAQs from "./ServiceFAQs";

interface ServiceData {
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  duration: string;
  discountText?: string;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface ServiceDetailBottomSheetProps {
  service: ServiceData;
  processSteps: ProcessStep[];
  faqs: FAQ[];
  onAddService?: () => void;
  onBookNow?: () => void;
  cartQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

const ServiceDetailBottomSheet = forwardRef<
  CustomBottomSheetRef,
  ServiceDetailBottomSheetProps
>(
  (
    {
      service,
      processSteps,
      faqs,
      onAddService,
      onBookNow,
      cartQuantity = 0,
      onQuantityChange,
    },
    ref
  ) => {
    return (
      <CustomBottomSheet
        ref={ref}
        snapPoints={["80%", "90%"]}
        initialSnapIndex={-1}
        scrollable={false}
        showCloseButton={false}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
        }}
      >
        <View className="flex-1">
          <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <ServiceHeader
              service={service}
              onAddService={onAddService}
              onQuantityChange={onQuantityChange}
            />
            <ServiceCoverPromise />
            <ServiceProcessSteps steps={processSteps} />
            <ServiceFAQs faqs={faqs} />

            {/* Bottom Spacing for Button */}
            <View className="h-20" />
          </ScrollView>

          {/* Fixed Bottom Button - only when quantity > 0 */}
          {cartQuantity > 0 && (
            <View
              className="absolute bottom-20 left-0 right-0 p-4 border-t"
              style={{
                backgroundColor: COLORS.white,
                borderTopColor: COLORS.borderLight,
              }}
            >
              <TouchableOpacity
                onPress={onBookNow}
                className="py-4 rounded-full items-center"
                style={{ backgroundColor: COLORS.primary }}
                activeOpacity={0.9}
              >
                <Text variant="callout" className="font-semibold text-white">
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </CustomBottomSheet>
    );
  }
);

ServiceDetailBottomSheet.displayName = "ServiceDetailBottomSheet";
export default ServiceDetailBottomSheet;

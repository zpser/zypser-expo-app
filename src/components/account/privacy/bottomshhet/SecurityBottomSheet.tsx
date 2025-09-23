import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { COLORS } from "@/util/constant/colors";
import CustomBottomSheet, {
  CustomBottomSheetRef,
} from "@/components/core/bottomsheet/CustomBottomSheet";
import CustomSvg from "@/components/core/svg/CustomSvg";

interface SecurityBottomSheetProps {
  onContinue?: () => void;
}

const SecurityBottomSheet = forwardRef<
  CustomBottomSheetRef,
  SecurityBottomSheetProps
>(({ onContinue }, ref) => {
  const bottomSheetRef = useRef<CustomBottomSheetRef>(null);

  // Expose the underlying CustomBottomSheetRef methods for consistency
  useImperativeHandle(ref, () => ({
    expand: () => bottomSheetRef.current?.expand(),
    collapse: () => bottomSheetRef.current?.collapse(),
    close: () => bottomSheetRef.current?.close(),
    snapToIndex: (index: number) => bottomSheetRef.current?.snapToIndex(index),
  }));

  const handleContinue = () => {
    bottomSheetRef.current?.close();
    onContinue?.();
  };

  return (
    <CustomBottomSheet
      ref={bottomSheetRef}
      snapPoints={["70%"]}
      initialSnapIndex={-1}
      showCloseButton={false}
      enablePanDownToClose={true}
      backgroundStyle={{
        backgroundColor: COLORS.primaryText,
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
      }}
      handleIndicatorStyle={{
        backgroundColor: `${COLORS.white}60`,
      }}
      backdropOpacity={0.5}
    >
      <View className="flex-1 px-6 py-8">
        {/* Security Icon */}
        <View className="items-center mb-8">
          <View className="mb-6">
            <CustomSvg name="security" width={115} height={130} />
          </View>
        </View>

        {/* Title */}
        <View className="items-center mb-4">
          <Text variant="title2" className="font-bold text-center mb-1">
            <Text variant={"title2"} style={{ color: COLORS.white }}>
              We are{" "}
            </Text>
            <Text variant={"title2"} style={{ color: COLORS.primary }}>
              Secure
            </Text>
          </Text>

          <Text variant="title3" className="font-semibold text-center">
            <Text variant={"title2"} style={{ color: COLORS.white }}>
              Built on Trust and{" "}
            </Text>
            <Text variant={"title2"} style={{ color: COLORS.primary }}>
              Security
            </Text>
            <Text variant={"title2"} style={{ color: COLORS.white }}>
              .
            </Text>
          </Text>
        </View>

        {/* Description */}
        <View className="mb-16 px-4">
          <Text
            variant="footnote"
            className="text-center"
            style={{
              color: `${COLORS.white}60`,
              lineHeight: 20,
            }}
          >
            We use industry-standard encryption to protect your data. You can
            review our full privacy policy in the app settings.
          </Text>
        </View>

        {/* Continue Button */}
        <View className="mt-auto px-2 bg-primaryButton rounded-full">
          <TouchableOpacity
            className="rounded-full py-4 items-center"
            style={{
              shadowColor: COLORS.primary,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
            onPress={handleContinue}
          >
            <Text variant="subhead" className="font-semibold text-white">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomBottomSheet>
  );
});

SecurityBottomSheet.displayName = "SecurityBottomSheet";

export default SecurityBottomSheet;

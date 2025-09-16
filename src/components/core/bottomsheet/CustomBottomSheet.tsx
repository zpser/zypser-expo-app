import React, {
  forwardRef,
  useCallback,
  useMemo,
  useImperativeHandle,
} from "react";
import { View, TouchableOpacity } from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { Text } from "../text";

export interface CustomBottomSheetRef {
  expand: () => void;
  collapse: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
}

export interface CustomBottomSheetProps {
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  snapPoints?: string[] | number[];
  initialSnapIndex?: number;
  enablePanDownToClose?: boolean;
  enableOverDrag?: boolean;
  enableDynamicSizing?: boolean;
  backgroundStyle?: object;
  handleIndicatorStyle?: object;
  backdropOpacity?: number;
  scrollable?: boolean;
  onClose?: () => void;
  onChange?: (index: number) => void;
  onAnimate?: (fromIndex: number, toIndex: number) => void;
  accessibilityLabel?: string;
}

const CustomBottomSheet = forwardRef<
  CustomBottomSheetRef,
  CustomBottomSheetProps
>(
  (
    {
      children,
      title,
      showCloseButton = true,
      snapPoints = ["25%", "50%", "90%"],
      initialSnapIndex = -1,
      enablePanDownToClose = true,
      enableOverDrag = true,
      enableDynamicSizing = false,
      backgroundStyle,
      handleIndicatorStyle,
      backdropOpacity = 0.5,
      scrollable = false,
      onClose,
      onChange,
      onAnimate,
      accessibilityLabel,
    },
    ref
  ) => {
    const bottomSheetRef = React.useRef<BottomSheetModal>(null);

    const snapPointsMemo = useMemo(() => snapPoints, [snapPoints]);

    useImperativeHandle(ref, () => ({
      expand: () => {
        console.log("Expanding bottom sheet...");
        bottomSheetRef.current?.present();
      },
      collapse: () => bottomSheetRef.current?.dismiss(),
      close: () => bottomSheetRef.current?.dismiss(),
      snapToIndex: (index: number) => {
        if (index >= 0) {
          console.log("Snapping to index:", index);
          bottomSheetRef.current?.present();
          // Small delay to ensure the modal is presented before snapping
          setTimeout(() => {
            bottomSheetRef.current?.snapToIndex(index);
          }, 100);
        } else {
          bottomSheetRef.current?.dismiss();
        }
      },
    }));

    const renderBackdrop = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={backdropOpacity}
          enableTouchThrough={false}
          onPress={() => bottomSheetRef.current?.dismiss()}
        />
      ),
      [backdropOpacity]
    );

    const handleClosePress = useCallback(() => {
      bottomSheetRef.current?.dismiss();
    }, []);

    const ContentWrapper = scrollable ? BottomSheetScrollView : BottomSheetView;

    return (
      <BottomSheetModal
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPointsMemo}
        enablePanDownToClose={enablePanDownToClose}
        enableOverDrag={enableOverDrag}
        enableDynamicSizing={enableDynamicSizing}
        backdropComponent={renderBackdrop}
        onChange={(index) => {
          console.log("Bottom sheet changed to index:", index);
          onChange?.(index);
        }}
        onAnimate={onAnimate}
        backgroundStyle={[
          {
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          backgroundStyle,
        ]}
        handleIndicatorStyle={[
          {
            backgroundColor: "#d1d5db",
            width: 40,
            height: 4,
          },
          handleIndicatorStyle,
        ]}
        accessibilityLabel={accessibilityLabel}
        android_keyboardInputMode="adjustResize"
      >
        {(title || showCloseButton) && (
          <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
            {title ? (
              <Text className="text-lg font-semibold text-gray-900 flex-1">
                {title}
              </Text>
            ) : (
              <View className="flex-1" />
            )}
            {showCloseButton && (
              <TouchableOpacity
                onPress={handleClosePress}
                className="w-8 h-8 items-center justify-center rounded-full bg-gray-100"
                activeOpacity={0.7}
              >
                <Text className="text-gray-600 font-bold text-lg">×</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <ContentWrapper className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-1">{children}</View>
        </ContentWrapper>
      </BottomSheetModal>
    );
  }
);

CustomBottomSheet.displayName = "CustomBottomSheet";

export default CustomBottomSheet;

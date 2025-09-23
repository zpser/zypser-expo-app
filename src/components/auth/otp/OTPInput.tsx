import { COLORS } from "@/util/constant/colors";
import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { View, Text, TextInput, Animated } from "react-native";

interface OTPInputProps {
  otpValues: string[];
  activeIndex: number;
  onOTPChange: (value: string, index: number) => void;
  onKeyPress: (e: any, index: number) => void;
  onInputFocus: (index: number) => void;
  onInputBlur: (index: number) => void;
  animatedValues: Animated.Value[];
}

export interface OTPInputRef {
  focus: (index: number) => void;
}

const OTPInput = forwardRef<OTPInputRef, OTPInputProps>(
  (
    {
      otpValues,
      activeIndex,
      onOTPChange,
      onKeyPress,
      onInputFocus,
      onInputBlur,
      animatedValues,
    },
    ref
  ) => {
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useImperativeHandle(ref, () => ({
      focus: (index: number) => {
        inputRefs.current[index]?.focus();
      },
    }));

    return (
      <View className="flex-row justify-center mb-8 px-2 space-x-2">
        {otpValues.map((value, index) => (
          <Animated.View
            key={index}
            className="relative"
            style={{
              opacity: animatedValues[index],
            }}
          >
            <View
              className="w-14 h-14 rounded-full border-2 justify-center items-center mr-1"
              style={{
                borderColor:
                  activeIndex === index || value
                    ? COLORS.primary
                    : "rgba(125, 77, 238, 0.2)",
                backgroundColor:
                  activeIndex === index || value
                    ? COLORS.white
                    : "rgba(255, 255, 255, 0.2)",
                shadowColor:
                  activeIndex === index || value
                    ? COLORS.primary
                    : "transparent",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: activeIndex === index || value ? 2 : 0,
              }}
            >
              <TextInput
                ref={(ref) => (inputRefs.current[index] = ref)}
                className="text-center text-xl font-bold text-gray-900 w-full h-full rounded-full"
                value={value}
                onChangeText={(text) =>
                  onOTPChange(text.replace(/[^0-9]/g, ""), index)
                }
                onKeyPress={(e) => onKeyPress(e, index)}
                onFocus={() => onInputFocus(index)}
                onBlur={() => onInputBlur(index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
            </View>
          </Animated.View>
        ))}
      </View>
    );
  }
);

OTPInput.displayName = "OTPInput";

export default OTPInput;

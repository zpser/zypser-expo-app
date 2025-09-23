import { Animated } from "react-native";
import { OTPInputRef } from "@/components/auth";

export const useOTPInput = (
  otpValues: string[],
  setOtpValues: (values: string[]) => void,
  setActiveIndex: (index: number) => void,
  animatedValues: Animated.Value[],
  otpInputRef: React.RefObject<OTPInputRef>,
  form: any
) => {
  // Animate input on focus/blur
  const animateInput = (index: number, toValue: number) => {
    Animated.timing(animatedValues[index], {
      toValue,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const handleOTPChange = (value: string, index: number) => {
    if (value.length > 1) return; // Prevent multiple characters

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.toUpperCase(); // Convert to uppercase
    setOtpValues(newOtpValues);

    // Update form value
    const otpString = newOtpValues.join("");
    form.setValue("otp", otpString);

    // Move to next input if value is entered
    if (value && index < 5) {
      otpInputRef.current?.focus(index + 1);
      setActiveIndex(index + 1);
    }

    // Animate current input
    if (value) {
      animateInput(index, 1);
    } else {
      animateInput(index, 1);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      if (otpValues[index]) {
        // If current field has value, clear it
        const newOtpValues = [...otpValues];
        newOtpValues[index] = "";
        setOtpValues(newOtpValues);
        form.setValue("otp", newOtpValues.join(""));
      } else if (index > 0) {
        // If current field is empty, move to previous field and clear it
        const newOtpValues = [...otpValues];
        newOtpValues[index - 1] = "";
        setOtpValues(newOtpValues);
        form.setValue("otp", newOtpValues.join(""));
        otpInputRef.current?.focus(index - 1);
        setActiveIndex(index - 1);
      }
    }
  };

  const handleInputFocus = (index: number) => {
    setActiveIndex(index);
  };

  const handleInputBlur = (index: number) => {
    // Keep animation state
  };

  return {
    handleOTPChange,
    handleKeyPress,
    handleInputFocus,
    handleInputBlur,
  };
};

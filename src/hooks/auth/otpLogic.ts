import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Animated } from "react-native";
import {
  otpVerificationSchema,
  OTPVerificationData,
  validateOTP,
} from "@/service/validation";
import { OTPInputRef } from "@/components/auth";
import { LoginMethod } from "@/@types/login";

type OTPFormData = OTPVerificationData;

export const useOTPLogic = () => {
  const params = useLocalSearchParams();
  const phoneNumber = params.phoneNumber as string;
  const email = params.email as string;
  const method = params.method as LoginMethod;

  const [otpValues, setOtpValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [resendTimer, setResendTimer] = useState<number>(10);
  const [canResend, setCanResend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Animation refs for each input
  const animatedValues = useRef(
    Array.from({ length: 6 }, () => new Animated.Value(1))
  ).current;

  const otpInputRef = useRef<OTPInputRef>(null);

  const form = useForm<OTPFormData>({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: {
      otp: "",
      ...(phoneNumber ? { phoneNumber } : {}),
      ...(email ? { email } : {}),
    },
  });

  // Timer effect for resend functionality
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

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

  const onSubmit = async (data: OTPFormData) => {
    console.log("1");

    setIsLoading(true);

    // Validate OTP using service
    const otpValidation = validateOTP(data.otp);
    if (!otpValidation.success) {
      console.error("Validation Error", otpValidation.error);
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      console.log("Verifying OTP:", otpValidation.data);
      console.log("Method:", method);
      console.log("Phone:", phoneNumber);
      console.log("Email:", email);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Navigate to next screen on success
      router.push("/profileDetail");
    } catch (error) {
      console.error("Error", "OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (canResend) {
      setIsLoading(true);

      try {
        console.log(
          "Resending code to:",
          method === "phone" ? phoneNumber : email
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setResendTimer(10);
        setCanResend(false);
        console.log("Success", "OTP has been resent successfully");
      } catch (error) {
        console.error("Error", "Failed to resend OTP. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };
  const onChangeNumber = () => {
    router.back();
  };

  return {
    // State
    otpValues,
    activeIndex,
    resendTimer,
    canResend,
    isLoading,
    phoneNumber,
    email,
    method,

    // Refs
    otpInputRef,
    animatedValues,

    // Form
    form,

    // Actions
    handleOTPChange,
    handleKeyPress,
    handleInputFocus,
    handleInputBlur,
    onSubmit,
    handleResendCode,
    onChangeNumber,
  };
};

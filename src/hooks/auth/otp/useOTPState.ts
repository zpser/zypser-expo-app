import { useState, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { Animated } from "react-native";
import { OTPInputRef } from "@/components/auth";
import { LoginMethod } from "@/@types/login";

export const useOTPState = () => {
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

  return {
    phoneNumber,
    email,
    method,
    otpValues,
    setOtpValues,
    activeIndex,
    setActiveIndex,
    resendTimer,
    setResendTimer,
    canResend,
    setCanResend,
    isLoading,
    setIsLoading,
    animatedValues,
    otpInputRef,
  };
};

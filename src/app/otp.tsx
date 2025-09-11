import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomHeader from "@/components/core/header";
import Footer from "@/components/CommonFooter";
import { Icon } from "@/components/core/icon";

// Updated validation schema to allow letters and numbers
const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 characters")
    .regex(/^[0-9]{6}$/, "OTP must contain only numbers"),
});

type OTPFormData = z.infer<typeof otpSchema>;

const OTP = () => {
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

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const form = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
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
      inputRefs.current[index + 1]?.focus();
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
        inputRefs.current[index - 1]?.focus();
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

  const onSubmit = (data: OTPFormData) => {
    setIsLoading(true);
    console.log("OTP submitted:", data);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to next screen or handle success
      router.push("/(tabs)"); // Or wherever you want to navigate
    }, 2000);
  };

  const handleResendCode = () => {
    if (canResend) {
      console.log("Resending code...");
      setResendTimer(10);
      setCanResend(false);
      // Add your resend logic here
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-allStone"
      edges={["top", "left", "right"]}
    >
      {/* Custom Header */}
      <CustomHeader
        title="Enter OTP"
        showBackButton={true}
        textColor="#111827" // text-gray-900
        backButtonColor="#7D4DEE" // text-primaryButton
        statusBarStyle="dark"
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 pt-6">
            {/* Description */}
            <Text className="text-gray-600 text-base mb-2 leading-6">
              We want to make sure your account is secure. Enter the 6-digit
              verification code we sent to
            </Text>
            <Text className="text-primaryButton font-medium text-base mb-8">
              +61 434 293 165
            </Text>

            {/* Title */}
            <Text className="text-xl font-semibold text-gray-900 mb-8">
              Enter 6 Digit Code
            </Text>

            {/* OTP Input Fields */}
            <View className="flex-row justify-center mb-8 px-2 space-x-2 ">
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
                          ? "#7D4DEE"
                          : "rgba(125, 77, 238, 0.2)",
                      backgroundColor:
                        activeIndex === index || value
                          ? "#FFFFFF"
                          : "rgba(255, 255, 255, 0.2)",
                      shadowColor:
                        activeIndex === index || value
                          ? "#7D4DEE"
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
                        handleOTPChange(text.replace(/[^0-9]/g, ""), index)
                      }
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      onFocus={() => handleInputFocus(index)}
                      onBlur={() => handleInputBlur(index)}
                      keyboardType="number-pad"
                      maxLength={1}
                      selectTextOnFocus
                    />
                  </View>
                </Animated.View>
              ))}
            </View>

            {/* Status Text - Left Aligned */}
            {/* Status Text - Left Aligned with Green Arrow */}
            <View className="flex-row items-center mb-6">
              {otpValues.join("").length === 6 && !isLoading && (
                <Icon
                  name={"check-circle-o"} // or "arrow-right" if you prefer
                  size={20}
                  color="#179236" // green color
                  className="mr-2"
                />
              )}
              <Text
                className={`text-left text-sm ${
                  otpValues.join("").length === 6 && !isLoading
                    ? "text-green-600 font-medium"
                    : "text-gray-500"
                }`}
              >
                {otpValues.join("").length === 6 && !isLoading
                  ? "OTP Verified"
                  : isLoading
                    ? "Verifying Code..."
                    : "Fetching Code"}
              </Text>
            </View>

            {/* Form Errors */}
            {form.formState.errors.otp && (
              <Text className="text-red-500 text-sm text-left mb-4">
                {form.formState.errors.otp.message}
              </Text>
            )}

            {/* Additional Info */}
            <Text className="text-gray-600 text-sm mb-4 leading-5">
              Don't see the email in your Inbox? Check your spam folder.
            </Text>

            {/* Resend Code - Left Aligned */}
            <TouchableOpacity
              onPress={handleResendCode}
              disabled={!canResend}
              className="mb-8 self-start"
            >
              <Text
                className={`text-sm underline font-medium ${
                  canResend ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {canResend ? "Resend Code" : `Resend Code in ${resendTimer}s`}
              </Text>
            </TouchableOpacity>

            {/* Continue Button */}
            <TouchableOpacity
              className="rounded-full py-4 mb-6"
              onPress={form.handleSubmit(onSubmit)}
              disabled={otpValues.join("").length !== 6 || isLoading}
              style={{
                backgroundColor:
                  otpValues.join("").length === 6 && !isLoading
                    ? "#7D4DEE"
                    : "rgba(125, 77, 238, 0.3)",
              }}
            >
              <Text
                className={`text-center font-semibold text-lg ${
                  otpValues.join("").length === 6 && !isLoading
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                {isLoading ? "Verifying..." : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer */}
        <Footer />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTP;

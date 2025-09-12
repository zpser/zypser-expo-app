import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Alert } from "react-native";
import {
  phoneLoginSchema,
  emailLoginSchema,
  PhoneLoginData,
  EmailLoginData,
  validatePhoneNumber,
  validateEmail,
} from "@/service/validation";

export const useLoginLogic = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [isLoading, setIsLoading] = useState(false);

  const phoneForm = useForm<PhoneLoginData>({
    resolver: zodResolver(phoneLoginSchema),
    defaultValues: {
      phoneNumber: "",
      countryCode: "+61",
    },
  });

  const emailForm = useForm<EmailLoginData>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onPhoneSubmit = async (data: PhoneLoginData) => {
    setIsLoading(true);

    // Validate phone number using service
    const phoneValidation = validatePhoneNumber(data.phoneNumber);
    if (!phoneValidation.success) {
      Alert.alert("Validation Error", phoneValidation.error);
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      console.log("Sending OTP to phone:", phoneValidation.data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Navigate to OTP screen with phone data
      router.push({
        pathname: "/auth/otp",
        params: {
          phoneNumber: phoneValidation.data,
          method: "phone",
        },
      });
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onEmailSubmit = async (data: EmailLoginData) => {
    setIsLoading(true);

    // Validate email using service
    const emailValidation = validateEmail(data.email);
    if (!emailValidation.success) {
      Alert.alert("Validation Error", emailValidation.error);
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      console.log("Sending OTP to email:", emailValidation.data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Navigate to OTP screen with email data
      router.push({
        pathname: "/auth/otp",
        params: {
          email: emailValidation.data,
          method: "email",
        },
      });
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google");
    // Handle Google login logic here
    Alert.alert("Info", "Google login not implemented yet");
  };

  const handleAppleLogin = () => {
    console.log("Continue with Apple");
    // Handle Apple login logic here
    Alert.alert("Info", "Apple login not implemented yet");
  };

  return {
    // State
    loginMethod,
    isLoading,

    // Forms
    phoneForm,
    emailForm,

    // Actions
    setLoginMethod,
    onPhoneSubmit,
    onEmailSubmit,
    handleGoogleLogin,
    handleAppleLogin,
  };
};

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
import { LoginMethod } from "@/@types/login";

export const useLoginLogic = () => {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>(
    LoginMethod.PHONE
  );
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
      console.error("Validation Error", phoneValidation.error);
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
          method: LoginMethod.PHONE,
        },
      });
    } catch (error) {
      console.error("Error", "Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onEmailSubmit = async (data: EmailLoginData) => {
    setIsLoading(true);

    // Validate email using service
    const emailValidation = validateEmail(data.email);
    if (!emailValidation.success) {
      console.error("Validation Error", emailValidation.error);
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
          method: LoginMethod.EMAIL,
        },
      });
    } catch (error) {
      console.error("Error", "Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google");
    // Handle Google login logic here
    console.log("Info", "Google login not implemented yet");
  };

  const handleAppleLogin = () => {
    console.log("Continue with Apple");
    // Handle Apple login logic here
    console.log("Info", "Apple login not implemented yet");
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

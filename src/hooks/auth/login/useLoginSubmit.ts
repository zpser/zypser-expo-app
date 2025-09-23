import { router } from "expo-router";
import { ROUTES } from "@/util/constant/routes";
import {
  PhoneLoginData,
  EmailLoginData,
  validatePhoneNumber,
  validateEmail,
} from "@/service/validation";
import { LoginMethod } from "@/@types/login";

export const useLoginSubmit = (setIsLoading: (loading: boolean) => void) => {
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
        pathname: ROUTES.AUTH.OTP,
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
        pathname: ROUTES.AUTH.OTP,
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

  return {
    onPhoneSubmit,
    onEmailSubmit,
  };
};

import { useEffect } from "react";
import { router } from "expo-router";
import { ROUTES } from "@/util/constant/routes";
import { validateOTP } from "@/service/validation";

export const useOTPActions = (
  resendTimer: number,
  setResendTimer: (timer: number) => void,
  setCanResend: (canResend: boolean) => void,
  setIsLoading: (loading: boolean) => void,
  method: string,
  phoneNumber?: string,
  email?: string
) => {
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
  }, [resendTimer, setResendTimer, setCanResend]);

  const onSubmit = async (data: any) => {
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
      router.push(ROUTES.PROFILE_DETAIL);
    } catch (error) {
      console.error("Error", "OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
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
  };

  const onChangeNumber = () => {
    router.back();
  };

  return {
    onSubmit,
    handleResendCode,
    onChangeNumber,
  };
};

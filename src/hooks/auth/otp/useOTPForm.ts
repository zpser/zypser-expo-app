import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  otpVerificationSchema,
  OTPVerificationData,
} from "@/service/validation";

type OTPFormData = OTPVerificationData;

export const useOTPForm = (phoneNumber?: string, email?: string) => {
  const form = useForm<OTPFormData>({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: {
      otp: "",
      ...(phoneNumber ? { phoneNumber } : {}),
      ...(email ? { email } : {}),
    },
  });

  return {
    form,
  };
};

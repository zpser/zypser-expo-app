import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  phoneLoginSchema,
  emailLoginSchema,
  PhoneLoginData,
  EmailLoginData,
} from "@/service/validation";

export const useLoginForms = () => {
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

  return {
    phoneForm,
    emailForm,
  };
};

import { useState } from "react";
import { LoginMethod } from "@/@types/login";

export const useLoginState = () => {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>(
    LoginMethod.PHONE
  );
  const [isLoading, setIsLoading] = useState(false);

  return {
    loginMethod,
    setLoginMethod,
    isLoading,
    setIsLoading,
  };
};

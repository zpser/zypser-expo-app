import { useState } from "react";

export const useProfileState = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    isFocused,
    setIsFocused,
    isLoading,
    setIsLoading,
  };
};

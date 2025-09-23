import { router } from "expo-router";
import { ROUTES } from "@/util/constant/routes";

export const useProfileActions = (setIsLoading: (loading: boolean) => void) => {
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    console.log("Profile data:", data);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navigate to next screen
      router.push(ROUTES.FETCH_LOCATION);
    } catch (error) {
      console.error("Profile save error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputFocus = (setIsFocused: (focused: boolean) => void) => {
    setIsFocused(true);
  };

  const handleInputBlur = (setIsFocused: (focused: boolean) => void) => {
    setIsFocused(false);
  };

  return {
    onSubmit,
    handleInputFocus,
    handleInputBlur,
  };
};

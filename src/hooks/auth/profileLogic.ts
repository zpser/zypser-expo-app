import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { z } from "zod";

// Validation schema
const profileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const useProfileLogic = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
    },
  });

  const nameValue = form.watch("name");

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    console.log("Profile data:", data);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navigate to next screen
      router.push("/(tabs)");
    } catch (error) {
      console.error("Profile save error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return {
    // State
    isFocused,
    isLoading,
    nameValue,

    // Form
    form,

    // Actions
    onSubmit,
    handleInputFocus,
    handleInputBlur,
  };
};

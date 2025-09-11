import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomHeader from "@/components/core/header";
import Footer from "@/components/CommonFooter";

// Validation schema
const profileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileDetail = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
    },
  });

  const nameValue = form.watch("name");

  const onSubmit = (data: ProfileFormData) => {
    setIsLoading(true);
    console.log("Profile data:", data);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to next screen
      router.push("/(tabs)"); // or wherever you want to navigate
    }, 2000);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-allStone"
      edges={["top", "left", "right"]}
    >
      {/* Custom Header */}
      <CustomHeader
        title="Profile Details"
        showBackButton={false}
        textColor="#111827" // text-gray-900
        backButtonColor="#7D4DEE" // text-primaryButton
        statusBarStyle="dark"
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <View className="flex-1 justify-between px-6 pt-8">
          {/* Main Content */}
          <View className="flex-1">
            {/* Name Input Section */}
            <View className="mb-8">
              <Text className="text-lg font-semibold text-gray-900 mb-3">
                Name
              </Text>

              <Controller
                control={form.control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`rounded-full border-2 bg-white px-4 py-1 ${
                      isFocused ? "border-primaryButton" : "border-transparent"
                    }`}
                  >
                    <TextInput
                      className="text-sm text-gray-900 mb-0.5"
                      placeholder={nameValue ? "" : "full name"}
                      placeholderTextColor="#9CA3AF"
                      value={value}
                      onChangeText={onChange}
                      onFocus={handleInputFocus}
                      onBlur={() => {
                        handleInputBlur();
                        onBlur();
                      }}
                      autoCapitalize="words"
                      autoComplete="name"
                      returnKeyType="done"
                      style={{
                        textAlignVertical: "center", // vertical centering
                        height: 44, // optional: adjust as per your design
                      }}
                    />
                  </View>
                )}
              />

              {form.formState.errors.name && (
                <Text className="text-red-500 text-sm mt-2 px-2">
                  {form.formState.errors.name.message}
                </Text>
              )}
            </View>

            {/* Privacy Text */}
            <View className="mb-8">
              <Text className="text-gray-600 text-sm leading-6">
                {isFocused ? (
                  <>
                    With{" "}
                    <Text className="text-primaryButton font-medium">
                      zypser
                    </Text>{" "}
                    your data is safe with us, we focus on data privacy and do
                    not share it with any third-party apps.
                  </>
                ) : (
                  <>
                    Your data is safe with us, we focus on data privacy and do
                    not share it with any third-party applications.
                  </>
                )}
              </Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              className={`rounded-full py-4 ${
                nameValue.trim().length >= 2 && !isLoading
                  ? "bg-primaryButton"
                  : "bg-primaryButton/30"
              }`}
              onPress={form.handleSubmit(onSubmit)}
              disabled={nameValue.trim().length < 2 || isLoading}
              style={{
                backgroundColor:
                  nameValue.trim().length >= 2 && !isLoading
                    ? "#7D4DEE"
                    : "rgba(125, 77, 238, 0.3)",
              }}
            >
              <Text
                className={`text-center font-semibold text-lg ${
                  nameValue.trim().length >= 2 && !isLoading
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                {isLoading ? "Saving..." : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <Footer />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileDetail;

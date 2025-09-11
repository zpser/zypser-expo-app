import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomHeader from "@/components/core/header";

// Validation schema
const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

const emailSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});

type PhoneFormData = z.infer<typeof phoneSchema>;
type EmailFormData = z.infer<typeof emailSchema>;

const Login = () => {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");

  const phoneForm = useForm<PhoneFormData>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onPhoneSubmit = (data: PhoneFormData) => {
    console.log("Phone login:", data);
    router.push("/otp");

    // Handle phone login logic here
  };

  const onEmailSubmit = (data: EmailFormData) => {
    console.log("Email login:", data);
    router.push("/otp");
    // Handle email login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google");
    // Handle Google login logic here
  };

  const handleAppleLogin = () => {
    console.log("Continue with Apple");
    // Handle Apple login logic here
  };

  return (
    <SafeAreaView
      className="flex-1 bg-allStone"
      edges={["top", "left", "right"]}
    >
      {/* Custom Header */}
      <CustomHeader
        title="Login"
        showBackButton={true}
        textColor="#111827" // text-gray-900
        backButtonColor="#7D4DEE" // text-primaryButton
        statusBarStyle="dark"
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 pt-6">
            {/* Toggle Buttons */}
            <View className="flex-row bg-gray-200 rounded-full p-1 mb-8">
              <TouchableOpacity
                className={`flex-1 py-3 rounded-full ${
                  loginMethod === "phone"
                    ? "bg-primaryButton"
                    : "bg-transparent"
                }`}
                onPress={() => setLoginMethod("phone")}
              >
                <Text
                  className={`text-center font-medium ${
                    loginMethod === "phone" ? "text-white" : "text-gray-600"
                  }`}
                >
                  Phone
                </Text>
              </TouchableOpacity>
              <Text className="self-center mx-4 text-gray-400">or</Text>
              <TouchableOpacity
                className={`flex-1 py-3 rounded-full ${
                  loginMethod === "email"
                    ? "bg-primaryButton"
                    : "bg-transparent"
                }`}
                onPress={() => setLoginMethod("email")}
              >
                <Text
                  className={`text-center font-medium ${
                    loginMethod === "email" ? "text-white" : "text-gray-600"
                  }`}
                >
                  Email
                </Text>
              </TouchableOpacity>
            </View>

            {/* Phone Form */}
            {loginMethod === "phone" && (
              <View>
                <Text className="text-lg font-semibold text-gray-900 mb-4">
                  Phone Number
                </Text>

                <View className="flex-row items-center bg-white rounded-xl border border-gray-200 mb-2">
                  <View className="flex-row items-center px-4 py-4 border-r border-gray-200">
                    <Text className="text-2xl mr-2">🇺🇸</Text>
                    <Text className="text-gray-700 font-medium">+61</Text>
                    <Text className="text-gray-400 ml-1">▼</Text>
                  </View>
                  <Controller
                    control={phoneForm.control}
                    name="phoneNumber"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        className="flex-1 px-4 py-4 text-gray-700"
                        placeholder="Phone Number"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="phone-pad"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                  />
                </View>

                {phoneForm.formState.errors.phoneNumber && (
                  <Text className="text-red-500 text-sm mb-4">
                    {phoneForm.formState.errors.phoneNumber.message}
                  </Text>
                )}

                <Text className="text-sm text-gray-500 mb-8 leading-5">
                  We will send a text with a verification code. Message and data
                  rates may apply. By continuing, you agree to our{" "}
                  <Text className="text-primaryButton">Terms of Service</Text> &{" "}
                  <Text className="text-primaryButton">Privacy Policy</Text>.
                </Text>

                <TouchableOpacity
                  className="bg-primaryButton rounded-full py-4 mb-6"
                  onPress={phoneForm.handleSubmit(onPhoneSubmit)}
                >
                  <Text className="text-white text-center font-semibold text-lg">
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Email Form */}
            {loginMethod === "email" && (
              <View>
                <Text className="text-lg font-semibold text-gray-900 mb-4">
                  Email Address
                </Text>

                <View className="bg-white rounded-xl border border-gray-200 mb-2">
                  <Controller
                    control={emailForm.control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        className="px-4 py-4 text-gray-700"
                        placeholder="Email Address"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                  />
                </View>

                {emailForm.formState.errors.email && (
                  <Text className="text-red-500 text-sm mb-4">
                    {emailForm.formState.errors.email.message}
                  </Text>
                )}

                <Text className="text-sm text-gray-500 mb-8 leading-5">
                  We will send an email with a verification link. By continuing,
                  you agree to our{" "}
                  <Text className="text-primaryButton">Terms of Service</Text> &{" "}
                  <Text className="text-primaryButton">Privacy Policy</Text>.
                </Text>

                <TouchableOpacity
                  className="bg-primaryButton rounded-full py-4 mb-6"
                  onPress={emailForm.handleSubmit(onEmailSubmit)}
                >
                  <Text className="text-white text-center font-semibold text-lg">
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500">or</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            {/* Social Login Buttons */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4 mb-4"
              onPress={handleGoogleLogin}
            >
              <Text className="text-2xl mr-3">G</Text>
              <Text className="text-gray-700 font-medium text-lg">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-4 mb-8"
              onPress={handleAppleLogin}
            >
              <Text className="text-2xl mr-3">🍎</Text>
              <Text className="text-gray-700 font-medium text-lg">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer */}
        <View className="px-6 pb-8 pt-4">
          <Text className="text-center text-black font-medium text-lg">
            <Text className="text-primaryButton italic">zypser</Text> customers
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

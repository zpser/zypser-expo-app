import React from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/core/header";
import Footer from "@/components/auth/CommonFooter";
import { Text } from "@/components/core/text";
import { PhoneInput, EmailInput, SocialLogin } from "@/components/auth";
import { useLoginForms } from "@/hooks/auth/login/useLoginForms";
import { useLoginState } from "@/hooks/auth/login/useLoginState";
import { useLoginSubmit } from "@/hooks/auth/login/useLoginSubmit";
import { LoginMethod } from "@/@types/login";
import { COLORS } from "@/util/constant/colors";
import GradientButton from "@/components/auth/GradientButton";

const Login = () => {
  // Use smaller, focused hooks
  const { phoneForm, emailForm } = useLoginForms();
  const { loginMethod, setLoginMethod, isLoading, setIsLoading } =
    useLoginState();
  const { onPhoneSubmit, onEmailSubmit } = useLoginSubmit(setIsLoading);

  // Inline social login handlers
  const handleGoogleLogin = () => {
    console.log("Continue with Google");
    console.log("Info", "Google login not implemented yet");
  };

  const handleAppleLogin = () => {
    console.log("Continue with Apple");
    console.log("Info", "Apple login not implemented yet");
  };

  return (
    <SafeAreaView
      className="flex-1 bg-allStone"
      edges={["top", "left", "right"]}
    >
      {/* Custom Header */}
      <CustomHeader
        title=""
        textColor={COLORS.primaryText} // text-gray-900
        backButtonColor={COLORS.primary} // text-primaryButton
        statusBarStyle="dark"
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 mb-4">
            <View className="self-center gap-3">
              <View className="bg-primaryButton self-center py-5 px-2 rounded-xl">
                <Text
                  variant={"body"}
                  className="text-sm font-bold italic text-white"
                >
                  zypser
                </Text>
              </View>
              <Text variant={"title2"} className=" font-medium">
                Get started with Zypser
              </Text>
            </View>
            {/* Phone Form */}
            {loginMethod === LoginMethod.PHONE && (
              <PhoneInput
                control={phoneForm.control}
                errors={phoneForm.formState.errors}
              />
            )}

            {/* Email Form */}
            {loginMethod === LoginMethod.EMAIL && (
              <EmailInput
                control={emailForm.control}
                errors={emailForm.formState.errors}
              />
            )}
            <GradientButton
              title={isLoading ? "Sending..." : "Continue"}
              onPress={
                loginMethod === LoginMethod.PHONE
                  ? phoneForm.handleSubmit(onPhoneSubmit)
                  : emailForm.handleSubmit(onEmailSubmit)
              }
            />

            {/* Social Login */}
            <SocialLogin
              onGooglePress={handleGoogleLogin}
              onApplePress={handleAppleLogin}
              loginMethod={loginMethod}
              onToggleMethod={setLoginMethod}
            />

            {/* Privacy / Terms below social buttons */}
            <View className="mt-4 mb-10">
              <View className="flex-row items-center mb-6">
                <View className="flex-1 h-px bg-gray-300" />
                <View className="flex-1 h-px bg-gray-300" />
              </View>
              <View>
                <Text className="text-sm text-gray-500 leading-5">
                  We will send a text with a verification code. Message and data
                  rates may apply. By continuing, you agree to our
                  <Text className="text-primaryButton text-sm">
                    {" "}
                    Terms of Service
                  </Text>
                  &
                  <Text className="text-primaryButton text-sm">
                    {" "}
                    Privacy Policy
                  </Text>
                  .
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

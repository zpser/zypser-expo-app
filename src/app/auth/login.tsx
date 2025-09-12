import React from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/core/header";
import Footer from "@/components/auth/CommonFooter";
import {
  LoginToggle,
  PhoneInput,
  EmailInput,
  ContinueButton,
  SocialLogin,
} from "@/components/auth";
import { useLoginLogic } from "@/hooks/auth";

const Login = () => {
  const {
    // State
    loginMethod,
    isLoading,

    // Forms
    phoneForm,
    emailForm,

    // Actions
    setLoginMethod,
    onPhoneSubmit,
    onEmailSubmit,
    handleGoogleLogin,
    handleAppleLogin,
  } = useLoginLogic();

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
            <LoginToggle loginMethod={loginMethod} onToggle={setLoginMethod} />

            {/* Phone Form */}
            {loginMethod === "phone" && (
              <View>
                <PhoneInput
                  control={phoneForm.control}
                  errors={phoneForm.formState.errors}
                />
                <ContinueButton
                  onPress={phoneForm.handleSubmit(onPhoneSubmit)}
                  isLoading={isLoading}
                />
              </View>
            )}

            {/* Email Form */}
            {loginMethod === "email" && (
              <View>
                <EmailInput
                  control={emailForm.control}
                  errors={emailForm.formState.errors}
                />
                <ContinueButton
                  onPress={emailForm.handleSubmit(onEmailSubmit)}
                  isLoading={isLoading}
                />
              </View>
            )}

            {/* Social Login */}
            <SocialLogin
              onGooglePress={handleGoogleLogin}
              onApplePress={handleAppleLogin}
            />
          </View>
        </ScrollView>

        <Footer />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

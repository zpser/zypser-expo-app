import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/core/header";
import Footer from "@/components/auth/CommonFooter";
import { NameInput, PrivacyText, ProfileButton } from "@/components/auth";
import { useProfileLogic } from "@/hooks/auth";
import { COLORS } from "@/util/constant/colors";

const ProfileDetail = () => {
  const {
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
  } = useProfileLogic();

  return (
    <SafeAreaView
      className="flex-1 bg-allStone"
      edges={["top", "left", "right"]}
    >
      {/* Custom Header */}
      <CustomHeader
        title="Profile Details"
        showBackButton={false}
        textColor={COLORS.primaryText} // text-gray-900
        backButtonColor={COLORS.primary} // text-primaryButton
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
            <NameInput
              control={form.control}
              errors={form.formState.errors}
              isFocused={isFocused}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              nameValue={nameValue}
            />

            {/* Privacy Text */}
            <PrivacyText isFocused={isFocused} />

            {/* Continue Button */}
            <ProfileButton
              onPress={form.handleSubmit(onSubmit)}
              nameValue={nameValue}
              isLoading={isLoading}
            />
          </View>

          {/* Footer */}
          <Footer />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileDetail;

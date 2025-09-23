import { LoginMethod } from "@/@types/login";
import {
  OTPDescription,
  OTPInput,
  OTPStatus,
  ResendCode,
} from "@/components/auth";
import GradientButton from "@/components/auth/GradientButton";
import { TouchableOpacity } from "@/components/core/button";
import CustomHeader from "@/components/core/header";
import { useOTPActions } from "@/hooks/auth/otp/useOTPActions";
import { useOTPForm } from "@/hooks/auth/otp/useOTPForm";
import { useOTPInput } from "@/hooks/auth/otp/useOTPInput";
import { useOTPState } from "@/hooks/auth/otp/useOTPState";
import { COLORS } from "@/util/constant/colors";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OTP = () => {
  const {
    phoneNumber,
    email,
    method,
    otpValues,
    setOtpValues,
    activeIndex,
    setActiveIndex,
    resendTimer,
    setResendTimer,
    canResend,
    setCanResend,
    isLoading,
    setIsLoading,
    animatedValues,
    otpInputRef,
  } = useOTPState();

  const { form } = useOTPForm(phoneNumber, email);

  const { handleOTPChange, handleKeyPress, handleInputFocus, handleInputBlur } =
    useOTPInput(
      otpValues,
      setOtpValues,
      setActiveIndex,
      animatedValues,
      otpInputRef,
      form
    );

  const { onSubmit, handleResendCode, onChangeNumber } = useOTPActions(
    resendTimer,
    setResendTimer,
    setCanResend,
    setIsLoading,
    method,
    phoneNumber,
    email
  );

  return (
    <SafeAreaView
      className="flex-1 bg-allStone"
      edges={["top", "left", "right"]}
    >
      {/* Custom Header */}
      <CustomHeader
        title=""
        showBackButton={true}
        textColor={COLORS.primaryText}
        backButtonColor={COLORS.primary}
        statusBarStyle="dark"
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 pt-6">
            {/* Description */}
            <OTPDescription
              phoneNumber={phoneNumber}
              email={email}
              method={method}
            />

            {/* Title */}
            <TouchableOpacity onPress={onChangeNumber}>
              <Text className="text-sm underline font-normal mb-8">
                {method == LoginMethod.PHONE
                  ? "Change your mobile number?"
                  : " Change your email?"}
              </Text>
            </TouchableOpacity>

            {/* OTP Input Fields */}
            <OTPInput
              ref={otpInputRef}
              otpValues={otpValues}
              activeIndex={activeIndex}
              onOTPChange={handleOTPChange}
              onKeyPress={handleKeyPress}
              onInputFocus={handleInputFocus}
              onInputBlur={handleInputBlur}
              animatedValues={animatedValues}
            />

            {/* Status Text */}
            <OTPStatus
              otpLength={otpValues.join("").length}
              isLoading={isLoading}
            />

            {/* Form Errors */}
            {form.formState.errors.otp && (
              <Text className="text-red-500 text-sm text-left mb-4">
                {form.formState.errors.otp.message}
              </Text>
            )}

            {/* Resend Code */}
            <ResendCode
              canResend={canResend}
              resendTimer={resendTimer}
              onResend={handleResendCode}
            />

            {/* <Text className="text-xs text-gray-500">
              Debug errors: {JSON.stringify(form.formState.errors)}
            </Text> */}
            {/* Continue Button */}
            <View
              style={{
                flex: 1,
                alignSelf: "flex-end",
              }}
            >
              <GradientButton
                title={"Next"}
                onPress={form.handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTP;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ResendCodeProps {
  canResend: boolean;
  resendTimer: number;
  onResend: () => void;
}

const ResendCode: React.FC<ResendCodeProps> = ({
  canResend,
  resendTimer,
  onResend,
}) => {
  return (
    <View className="mb-8">
      <Text className="text-gray-600 text-sm mb-4 leading-5">
        Don't see the email in your Inbox? Check your spam folder.
      </Text>

      <TouchableOpacity
        onPress={onResend}
        disabled={!canResend}
        className="self-start"
      >
        <Text
          className={`text-sm underline font-medium ${
            canResend ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {canResend ? "Resend Code" : `Resend Code in ${resendTimer}s`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResendCode;

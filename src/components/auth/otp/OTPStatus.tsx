import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@/components/core/icon";

interface OTPStatusProps {
  otpLength: number;
  isLoading: boolean;
}

const OTPStatus: React.FC<OTPStatusProps> = ({ otpLength, isLoading }) => {
  const isComplete = otpLength === 6 && !isLoading;

  return (
    <View className="flex-row items-center mb-6">
      {isComplete && (
        <Icon
          name="check-circle-o"
          size={20}
          color="#179236"
          className="mr-2"
        />
      )}
      <Text
        className={`text-left text-sm ${
          isComplete ? "text-green-600 font-medium" : "text-gray-500"
        }`}
      >
        {isComplete
          ? "OTP Verified"
          : isLoading
            ? "Verifying Code..."
            : "Fetching Code"}
      </Text>
    </View>
  );
};

export default OTPStatus;

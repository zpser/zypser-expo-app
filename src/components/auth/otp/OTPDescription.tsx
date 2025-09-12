import React from "react";
import { View, Text } from "react-native";

interface OTPDescriptionProps {
  phoneNumber?: string;
  email?: string;
  method?: string;
}

const OTPDescription: React.FC<OTPDescriptionProps> = ({
  phoneNumber,
  email,
  method,
}) => {
  return (
    <View>
      <Text className="text-gray-600 text-base mb-2 leading-6">
        We want to make sure your account is secure. Enter the 6-digit
        verification code we sent to
      </Text>
      <Text className="text-primaryButton font-medium text-base mb-8">
        {method === "phone" ? phoneNumber : email}
      </Text>
    </View>
  );
};

export default OTPDescription;

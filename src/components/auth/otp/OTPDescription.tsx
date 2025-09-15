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
      <Text className="font-medium text-base mb-1 leading-6">
        Enter 6-digit code sent to you at
      </Text>
      <Text className="text-primaryButton font-medium text-base mb-4">
        {method === "phone" ? phoneNumber : email}
      </Text>
    </View>
  );
};

export default OTPDescription;

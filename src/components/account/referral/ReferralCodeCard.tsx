import React from "react";
import { View, TextInput } from "react-native";
import { Text } from "@/components/core/text";
import { TouchableOpacity } from "@/components/core/button";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

interface ReferralCodeCardProps {
  referralCode: string;
  description: string;
  onCopyPress: () => void;
}

const ReferralCodeCard: React.FC<ReferralCodeCardProps> = ({
  referralCode,
  description,
  onCopyPress,
}) => {
  return (
    <View
      className="mt-8 bg-white rounded-xl p-6 mx-2 mb-4 shadow-sm"
      style={{ borderWidth: 1, borderColor: COLORS.borderLight }}
    >
      <Text variant="subhead" className="text-primaryButton font-medium mb-1">
        Your Referral Code
      </Text>
      <Text
        variant="footnote"
        className=" mb-4"
        style={{ color: COLORS.secondaryText }}
      >
        {description}
      </Text>

      <View className="flex-row items-center">
        <View className="flex-1 bg-gray-100 rounded-xl px-4 py-3 mr-3">
          <TextInput
            value={referralCode}
            editable={false}
            className="text-primaryText font-normal text-center"
            style={{ fontSize: 14 }}
          />
        </View>
        <TouchableOpacity
          className="bg-primaryButton rounded-xl p-3"
          onPress={onCopyPress}
        >
          <Ionicon name="copy-outline" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReferralCodeCard;

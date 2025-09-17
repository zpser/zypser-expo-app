import { View } from "react-native";
import React from "react";
import { COLORS } from "@/util/constant/colors";
import { Ionicon } from "@/components/core/icon";
import { Text } from "@/components/core/text";

const AccountHeader = () => {
  return (
    <View className="justify-between flex-row">
      <Ionicon name="chevron-back" size={16} color={COLORS.primary} />
      <Text variant={"subhead"}>Your Account</Text>
    </View>
  );
};

export default AccountHeader;

import React from "react";
import { View, ScrollView, Alert } from "react-native";
import { COLORS } from "@/util/constant/colors";
import { SafeAreaView } from "@/components/core/safe-area-view";
import AccountHeader from "@/components/account/AccountHeader";
import {
  ReferralCodeCard,
  RewardsCard,
  HowItWorksCard,
} from "@/components/account/referral";
import { REFERRAL_DATA } from "@/assets/data/account";

const Referral = () => {
  const handleCopyReferralCode = () => {
    // In a real app, you would copy to clipboard
    Alert.alert("Copied!", "Referral code copied to clipboard");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.background }}
      className="flex-1 bg-allStone"
      paddingX={0}
    >
      <View className="flex-1 bg-allStone mx-4 mt-4">
        {/* Header */}
        <AccountHeader title="Referrals & Coupons" />

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Referral Code Card */}
          <ReferralCodeCard
            referralCode={REFERRAL_DATA.referralCode}
            description={REFERRAL_DATA.description}
            onCopyPress={handleCopyReferralCode}
          />

          {/* Rewards Card */}
          <RewardsCard rewards={REFERRAL_DATA.rewards} />

          {/* How It Works Card */}
          <HowItWorksCard steps={REFERRAL_DATA.howItWorks} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Referral;

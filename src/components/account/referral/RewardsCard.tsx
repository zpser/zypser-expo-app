import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { ReferralReward } from "@/assets/data/account";
import { COLORS } from "@/util/constant/colors";

interface RewardsCardProps {
  rewards: ReferralReward[];
}

const RewardsCard: React.FC<RewardsCardProps> = ({ rewards }) => {
  const hasEarnedRewards = rewards.some((reward) => reward.status === "earned");

  return (
    <View
      className="bg-white rounded-xl p-6 mx-2 mb-4 shadow-sm"
      style={{ borderWidth: 1, borderColor: COLORS.borderLight }}
    >
      <Text variant="subhead" className="text-primaryButton font-medium mb-1">
        Your Rewards
      </Text>

      {!hasEarnedRewards ? (
        <Text
          variant="footnote"
          className="text-secondaryText mb-4"
          style={{ color: COLORS.secondaryText }}
        >
          Nothing earned yet...
        </Text>
      ) : (
        <Text
          variant="footnote"
          className="text-secondaryText mb-4"
          style={{ color: COLORS.secondaryText }}
        >
          You have earned rewards!
        </Text>
      )}

      <View className="flex-row gap-3">
        {rewards.map((reward, index) => (
          <View
            key={reward.id}
            className={`flex-1 rounded-xl p-4 ${
              reward.status === "earned"
                ? "bg-green-50 border border-green-200"
                : "bg-gray-100"
            }`}
          >
            <Text
              variant="footnote"
              className={`font-medium ${
                reward.status === "earned" ? "text-green-700" : "text-gray-500"
              }`}
            >
              {reward.amount}
            </Text>
            <Text
              variant="footnote"
              className={`mt-1 ${
                reward.status === "earned" ? "text-green-600" : "text-gray-400"
              }`}
            >
              {reward.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RewardsCard;

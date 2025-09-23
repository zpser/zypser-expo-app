import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface HowItWorksCardProps {
  steps: Array<{
    id: string;
    step: string;
  }>;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ steps }) => {
  return (
    <View
      className="rounded-xl p-6 mx-2 mb-4 relative overflow-hidden"
      style={{
        backgroundColor: COLORS.primaryText,
      }}
    >
      {/* Title */}
      <View className="mb-6">
        <Text variant="title1" className="font-bold">
          <Text variant="title1" style={{ color: COLORS.primary }}>
            How{" "}
          </Text>
          <Text variant={"title1"} style={{ color: COLORS.white }}>
            it works?
          </Text>
        </Text>
      </View>

      {/* Steps */}
      <View className="space-y-4 gap-2">
        {steps.map((step, index) => (
          <View
            key={step.id}
            className="rounded-full px-4 py-2"
            style={{
              backgroundColor: `${COLORS.white}08`, // Darker gray for pills
              borderWidth: 1,
              borderColor: `${COLORS.white}16`, // Border color
            }}
          >
            <View className="flex-row items-center">
              {/* Purple Dot */}
              <View
                className="w-2 h-2 rounded-full mr-3"
                style={{ backgroundColor: COLORS.primary }}
              />

              {/* Step Text */}
              <Text
                variant="footnote"
                className="flex-1"
                style={{
                  color: COLORS.white,
                }}
              >
                {step.step}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HowItWorksCard;

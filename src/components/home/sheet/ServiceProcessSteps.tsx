import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface ServiceProcessStepsProps {
  steps: ProcessStep[];
}

const ServiceProcessSteps: React.FC<ServiceProcessStepsProps> = ({ steps }) => {
  return (
    <View className="mb-6 mx-2">
      {/* Section Title */}
      <View className="px-4 pb-2">
        <Text
          variant="title3"
          className="font-semibold"
          style={{ color: COLORS.primaryText }}
        >
          Our process
        </Text>
      </View>

      {/* Steps */}
      {steps.map((step, index) => (
        <View key={step.id} className="flex-row px-4 py-3">
          <View
            className="w-8 h-8 rounded-full items-center justify-center mr-4 mt-1"
            style={{ backgroundColor: COLORS.background }}
          >
            <Text
              variant="subhead"
              className="font-semibold"
              style={{ color: COLORS.primaryText }}
            >
              {step.id}
            </Text>
          </View>

          <View className="flex-1">
            <Text
              variant="callout"
              className="font-semibold mb-1"
              style={{ color: COLORS.primaryText }}
            >
              {step.title}
            </Text>
            <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
              {step.description}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ServiceProcessSteps;

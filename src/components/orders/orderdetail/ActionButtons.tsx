import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "@/components/core/button";
import { Text } from "@/components/core/text";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";

interface ActionButtonsProps {
  onReorderService: () => void;
  onGetHelp: () => void;
  onReportIssue: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onReorderService,
  onGetHelp,
  onReportIssue,
}) => {
  return (
    <View className="px-4 mb-8">
      {/* Reorder Button */}
      <View className="rounded-full py-4 mb-4 bg-primaryButton">
        <TouchableOpacity onPress={onReorderService}>
          <Text
            variant="callout"
            className="font-semibold text-center"
            style={{ color: COLORS.white }}
          >
            Reorder Service
          </Text>
        </TouchableOpacity>
      </View>

      {/* Secondary Buttons */}
      <View className="flex-row space-x-3 gap-2">
        <View
          className="flex-1 rounded-full py-4 px-4"
          style={{
            borderWidth: 1,
            borderColor: COLORS.helpButton,
          }}
        >
          <TouchableOpacity
            onPress={onGetHelp}
            className="flex-row items-center justify-center"
          >
            <Ionicon
              name="help-circle-outline"
              size={20}
              color={COLORS.helpButton}
            />
            <Text
              variant="subhead"
              className="font-medium ml-2"
              style={{ color: COLORS.helpButton }}
            >
              Get Help
            </Text>
          </TouchableOpacity>
        </View>

        <View
          className="flex-1 rounded-full py-4 px-4"
          style={{
            borderWidth: 1,
            borderColor: COLORS.warningButton,
          }}
        >
          <TouchableOpacity
            onPress={onReportIssue}
            className="flex-row items-center justify-center"
          >
            <Ionicon
              name="warning-outline"
              size={20}
              color={COLORS.warningButton}
            />
            <Text
              variant="subhead"
              className="font-medium ml-2"
              style={{ color: COLORS.warningButton }}
            >
              Report Issue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

import React from "react";
import { View } from "react-native";
import { Text } from "@/components/core/text";
import { Ionicon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";
import { OrderStatus, STATUS_CONFIG } from "@/@types/order";

interface ServiceInfoProps {
  title: string;
  date: string;
  time: string;
  status: OrderStatus;
  instructionNote?: string;
}

export const ServiceInfo: React.FC<ServiceInfoProps> = ({
  title,
  date,
  time,
  status,
  instructionNote,
}) => {
  const statusConfig = STATUS_CONFIG[status];

  return (
    <View className="px-4">
      {/* Service Header */}
      <View className="items-center py-6">
        <View
          className="w-14 h-14 rounded-xl items-center justify-center mb-4"
          style={{ backgroundColor: COLORS.background }}
        >
          <Ionicon name="snow-outline" size={24} color={COLORS.scheduled} />
        </View>

        <Text
          variant="heading"
          className="font-bold text-center mb-1"
          style={{ color: COLORS.primaryText }}
        >
          {title}
        </Text>

        <Text
          variant="footnote"
          className="text-center"
          style={{ color: COLORS.secondaryText }}
        >
          {date} • Wed • {time}
        </Text>
      </View>

      {/* Status Section */}
      <View className="mb-6">
        <View
          className="flex-row justify-between items-center rounded-lg"
          style={{
            backgroundColor: `${COLORS.primary}10`,
            borderWidth: 1,
            borderColor: `${COLORS.primary}20`,
            padding: 10,
            paddingVertical: 6,
          }}
        >
          <Text variant="subhead" style={{ color: COLORS.secondaryText }}>
            Status
          </Text>
          <Text
            variant="subhead"
            className="font-semibold"
            style={{ color: statusConfig.color }}
          >
            {statusConfig.label}
          </Text>
        </View>

        {/* Dotted Line */}
        <View
          className="h-px"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.secondaryText,
            borderStyle: "dashed",
          }}
        />
      </View>

      {/* Instruction Note */}
      {instructionNote && (
        <View
          className="rounded-2xl p-4 mb-6"
          style={{ backgroundColor: COLORS.primaryText }}
        >
          <Text
            variant="caption1"
            className="font-medium mb-2"
            style={{ color: `${COLORS.white}80` }}
          >
            Instruction note
          </Text>
          <Text
            variant="footnote"
            className="leading-5"
            style={{ color: COLORS.white }}
          >
            {instructionNote}
          </Text>
        </View>
      )}
    </View>
  );
};

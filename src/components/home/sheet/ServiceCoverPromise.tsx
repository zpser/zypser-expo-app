// components/service/ServiceCoverPromise.tsx
import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@/components/core/text";
import { LucideIcon } from "@/components/core/icon";
import { COLORS } from "@/util/constant/colors";
import CustomSvg from "@/components/core/svg/CustomSvg";

const ServiceCoverPromise: React.FC = () => {
  return (
    <View className="mx-4 mt-6 mb-6 rounded-xl overflow-hidden">
      <LinearGradient
        colors={[COLORS.primaryText, COLORS.splashBg, COLORS.primaryText]}
        locations={[0, 0.8, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <View className="p-4 relative">
          {/* Worker SVG */}
          <View className="absolute right-4 top-4 bottom-4 w-20 items-center justify-center">
            <CustomSvg
              name="worker"
              width={100}
              height={100}
              fill={COLORS.warningButton}
            />
          </View>

          <View className="pr-24">
            <Text variant="heading" className="mb-4">
              <Text style={{ color: COLORS.primary }}>Zypser</Text>
              <Text style={{ color: COLORS.white, opacity: 0.8 }}>
                {" "}
                cover promise
              </Text>
            </Text>

            <View className="space-y-3">
              <View className="flex-row items-center mb-3">
                <LucideIcon name="ShieldCheck" size={20} color={COLORS.white} />
                <Text
                  variant="subhead"
                  className="ml-3"
                  style={{ color: COLORS.white }}
                >
                  Up to 30 days warranty
                </Text>
              </View>

              <View className="flex-row items-center">
                <LucideIcon name="DollarSign" size={20} color={COLORS.white} />
                <Text
                  variant="subhead"
                  className="ml-3"
                  style={{ color: COLORS.white }}
                >
                  Up to $50 damage cover
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ServiceCoverPromise;

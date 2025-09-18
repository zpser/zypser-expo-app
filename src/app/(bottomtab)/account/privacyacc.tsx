import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import { SafeAreaView } from "@/components/core/safe-area-view";
import PrivacySection from "@/components/account/privacy/PrivacySection";
import {
  PRIVACY_SETTINGS,
  PrivacyItem,
  PrivacySettings,
} from "@/assets/data/account";
import AccountHeader from "@/components/account/AccountHeader";
import SecurityBottomSheet from "@/components/account/privacy/bottomshhet/SecurityBottomSheet";
import { CustomBottomSheetRef } from "@/components/core/bottomsheet/CustomBottomSheet";

const PrivacyAccScreen = () => {
  const securitySheetRef = useRef<CustomBottomSheetRef>(null);
  const handleOpenSecurityInfo = () => {
    const timer = setTimeout(() => {
      securitySheetRef?.current?.snapToIndex(0);
    }, 200);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    handleOpenSecurityInfo();
  }, []);
  const handleContinue = () => {
    securitySheetRef?.current?.close();
  };
  const [privacySettings, setPrivacySettings] =
    useState<PrivacySettings>(PRIVACY_SETTINGS);

  const handleToggle = (id: string) => {
    setPrivacySettings((prev) => {
      const newSettings = { ...prev };

      // Find and toggle the specific privacy item
      Object.keys(newSettings).forEach((sectionKey) => {
        const section = newSettings[sectionKey as keyof typeof newSettings];
        if (Array.isArray(section)) {
          section.forEach((item: PrivacyItem) => {
            if (item.id === id) {
              item.isEnabled = !item.isEnabled;
            }
          });
        }
      });

      return newSettings;
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.background }}
      className="flex-1 bg-allStone"
      paddingX={0}
    >
      <View className="flex-1 bg-allStone mx-4 mt-4">
        {/* Header */}
        <AccountHeader title="Privacy & Accessibility" />

        {/* Scrollable Content */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 20,
          }}
        >
          <PrivacySection
            title="PRIVACY SETTINGS"
            items={privacySettings.privacySettings}
            onToggle={handleToggle}
          />

          <PrivacySection
            title="ACCESSIBILITY SETTINGS"
            items={privacySettings.accessibilitySettings}
            onToggle={handleToggle}
          />
        </ScrollView>
      </View>
      <SecurityBottomSheet ref={securitySheetRef} onContinue={handleContinue} />
    </SafeAreaView>
  );
};

export default PrivacyAccScreen;

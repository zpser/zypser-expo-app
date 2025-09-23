import React, { useCallback, useState } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";
import { SafeAreaView } from "@/components/core/safe-area-view";
import NotificationHeader from "@/components/account/notifications/NotificationHeader";
import NotificationSection from "@/components/account/notifications/NotificationSection";
import {
  NOTIFICATION_SETTINGS,
  NotificationItem,
  NotificationSettings,
} from "@/assets/data/account";
import AccountHeader from "@/components/account/AccountHeader";

const NotificationsScreen = () => {
  const [notificationSettings, setNotificationSettings] =
    useState<NotificationSettings>(NOTIFICATION_SETTINGS);

  const handleToggle = useCallback((id: string) => {
    setNotificationSettings((prev) => {
      const newSettings = { ...prev };

      Object.keys(newSettings).forEach((sectionKey) => {
        const section = newSettings[sectionKey as keyof typeof newSettings];
        if (Array.isArray(section)) {
          section.forEach((item: NotificationItem) => {
            if (item.id === id) {
              item.isEnabled = !item.isEnabled;
            }
          });
        }
      });

      return newSettings;
    });
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.background }}
      className="flex-1 bg-allStone"
      paddingX={0}
    >
      <View className="flex-1 bg-allStone mx-4 mt-4">
        {/* Header */}
        <AccountHeader title="Notifications" />

        {/* Scrollable Content */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 20,
          }}
        >
          <NotificationSection
            title="SERVICE NOTIFICATION"
            items={notificationSettings.serviceNotifications}
            onToggle={handleToggle}
          />

          <NotificationSection
            title="MARKETING & PROMOTIONS"
            items={notificationSettings.marketingPromotions}
            onToggle={handleToggle}
          />

          <NotificationSection
            title="COMMUNICATION CHANNELS"
            items={notificationSettings.communicationChannels}
            onToggle={handleToggle}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

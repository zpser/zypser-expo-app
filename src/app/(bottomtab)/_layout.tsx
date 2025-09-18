import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicon } from "@/components/core/icon";
import { Text } from "@/components/core/text";
import { COLORS } from "@/util/constant/colors";

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.bgTab,
          borderTopWidth: 1,
          borderTopColor: COLORS.borderLight,
          height: 66 + insets.bottom, // Add bottom safe area
          paddingTop: 12,
          paddingBottom: Math.max(insets.bottom, 12), // Ensure minimum padding
          paddingHorizontal: 24,
          // Remove default shadows/elevations
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: { height: 0, width: 0 },
          shadowRadius: 0,
          // Position at bottom
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.primaryText,
        // Hide tab bar background to use custom styling
        tabBarBackground: () => null,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <CustomTabItem
              iconName="home-outline"
              activeIconName="home"
              label="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ focused }) => (
            <CustomTabItem
              iconName="search-outline"
              activeIconName="search"
              label="Browse"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <CustomTabItem
              iconName="receipt-outline"
              activeIconName="receipt"
              label="Orders"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <CustomTabItem
              iconName="person-outline"
              activeIconName="person"
              label="Account"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

// Custom Tab Item Component with Ionicons
const CustomTabItem = ({
  iconName,
  activeIconName,
  label,
  focused,
}: {
  iconName: React.ComponentProps<typeof Ionicon>["name"];
  activeIconName?: React.ComponentProps<typeof Ionicon>["name"];
  label: string;
  focused: boolean;
}) => {
  return (
    <View className="flex-col justify-center items-center gap-1 px-2">
      {/* Icon */}
      <View className="w-6 h-6 justify-center items-center">
        <Ionicon
          name={focused && activeIconName ? activeIconName : iconName}
          size={24}
          color={focused ? COLORS.primary : COLORS.primaryText}
        />
      </View>

      {/* Label - Using custom Text component with className */}
      <Text
        variant="caption2"
        className={`text-center ${
          focused
            ? "text-primaryButton font-bold"
            : "text-[#121628] font-normal"
        }`}
      >
        {label}
      </Text>
    </View>
  );
};

import CustomHeader from "@/components/core/header";
import { Text } from "@/components/core/text";
import { MaterialTopTabs } from "@/layouts/material-top-tabs";
import { COLORS } from "@/util/constant/colors";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrdersLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header */}
      <CustomHeader
        title="Orders"
        backgroundColor="white"
        textColor={COLORS.primaryText}
        statusBarStyle="dark"
      />

      {/* Content Area */}
      <View className="flex-1 bg-white">
        {/* Top Tabs */}
        <MaterialTopTabs
          sceneContainerStyle={{ backgroundColor: COLORS.background }}
          screenOptions={{
            tabBarActiveTintColor: COLORS.black,
            tabBarInactiveTintColor: `${COLORS.primaryText}70`,
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.primary,
              height: 3,
              borderRadius: 100,
              marginHorizontal: 6, // Add margin to shrink the indicator
            },
            tabBarStyle: {
              backgroundColor: "white",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              paddingHorizontal: 8,
              width: "auto", // Let it size naturally
            },
            tabBarLabelStyle: {
              fontSize: 16,
              textTransform: "none",
              letterSpacing: 0,
              margin: 0,
              padding: 0,
            },
            tabBarItemStyle: {
              width: "auto",
            },
            tabBarContentContainerStyle: {
              alignItems: "flex-start",
              justifyContent: "flex-start",
            },
            swipeEnabled: true,
          }}
        >
          <MaterialTopTabs.Screen
            name="current"
            options={{ title: "Current" }}
          />
          <MaterialTopTabs.Screen name="past" options={{ title: "Past" }} />
          <MaterialTopTabs.Screen
            name="canceled"
            options={{ title: "Canceled" }}
          />
        </MaterialTopTabs>
      </View>
    </SafeAreaView>
  );
}

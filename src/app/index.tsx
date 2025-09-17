import {
  FIRST_LOGIN_DATE,
  getStorageData,
  IS_LOGIN,
  PROFILE_COMPLETED,
} from "@/service/storageHandler";
import { COLORS } from "@/util/constant/colors";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { ActivityIndicator, View } from "react-native";

const WELCOME_SCREEN_DAYS = 10;

export default function IndexScreen() {
  useFocusEffect(
    useCallback(() => {
      // router.replace("/splash");
      // router.replace("/(bottomtab)/home");
      router.replace("/(bottomtab)/account/profile");
      // router.replace("/auth/login");
      // router.push("/1");
      // checkAndNavigate();
    }, [])
  );
  const checkAndNavigate = async () => {
    try {
      // Get all necessary data from storage
      const isLoggedIn = await getStorageData(IS_LOGIN);
      const profileCompleted = await getStorageData(PROFILE_COMPLETED);
      const firstLoginDate = await getStorageData(FIRST_LOGIN_DATE);

      // Navigate based on current state
      if (!isLoggedIn) {
        // Not logged in - go to auth
        router.replace("/auth/login");
        return;
      }

      // User is logged in
      if (!profileCompleted) {
        // Profile not completed
        if (shouldShowWelcome(firstLoginDate)) {
          // Within 10 days - show welcome first
          router.replace("/welcome");
        } else {
          // After 10 days - go directly to profile detail
          router.replace("/profileDetail");
        }
        return;
      }

      // Profile completed
      if (shouldShowWelcome(firstLoginDate)) {
        // Within 10 days - show welcome
        router.replace("/welcome");
      } else {
        // After 10 days - go directly to home
        router.replace("/home");
      }
    } catch (error) {
      // Error reading storage, fallback to auth
      router.replace("/auth/login");
    }
  };

  const shouldShowWelcome = (firstLoginDate: string | null): boolean => {
    if (!firstLoginDate) return false;

    const firstLogin = new Date(firstLoginDate);
    const now = new Date();
    const daysDifference = Math.floor(
      (now.getTime() - firstLogin.getTime()) / (1000 * 60 * 60 * 24)
    );

    return daysDifference < WELCOME_SCREEN_DAYS;
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

import { useEffect } from "react";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
console.log("1");

import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
console.log("1");
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
console.log("1");

import Toast from "react-native-toast-message";
console.log("1");

import "../../global.css";
console.log("1");

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar style={"dark"} key={`root-status-bar-dark`} />

        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />

              <Stack.Screen name="splash" options={{ headerShown: false }} />

              <Stack.Screen
                name="fetchlocation"
                options={{ headerShown: false }}
              />

              <Stack.Screen name="auth" options={{ headerShown: false }} />

              <Stack.Screen
                name="welcome"
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="profileDetail"
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />

              <Stack.Screen
                name="(bottomtab)"
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
              <Stack.Screen
                name="[service]"
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="modal"
                options={{
                  presentation: "modal",
                  headerShown: false,
                }}
              />
            </Stack>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
        <Toast />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

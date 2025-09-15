import { useEffect } from "react";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeToggle } from "@/components/core/toggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Providers
// import { ThemeProvider } from '@react-navigation/native';

// Theme
import { NAV_THEME } from "@/theme";
import { useColorScheme } from "nativewind";
import "../../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "index", // Changed to index as entry point
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

  /** Adjust or remove hide Splash Screen TimeOut based on preference */
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
  const { colorScheme } = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar
          style={colorScheme === "dark" ? "light" : "dark"}
          key={`root-status-bar-${colorScheme === "dark" ? "light" : "dark"}`}
        />

        {/* <ThemeProvider value={NAV_THEME[colorScheme]}> */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack screenOptions={{ animation: "ios" }}>
            {/* Entry point - determines initial route */}
            <Stack.Screen name="index" options={{ headerShown: false }} />

            <Stack.Screen name="splash" options={{ headerShown: false }} />

            <Stack.Screen
              name="fetchlocation"
              options={{ headerShown: false }}
            />

            {/* Auth group - handles join-our-network, login, otp */}
            <Stack.Screen name="auth" options={{ headerShown: false }} />

            {/* Onboarding screens */}
            <Stack.Screen
              name="welcome"
              options={{
                headerShown: false,
                // Prevent going back to auth
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="profileDetail"
              options={{
                headerShown: false,
                // Prevent going back
                gestureEnabled: false,
              }}
            />

            {/* Main app screens */}
            <Stack.Screen
              name="(bottomtab)"
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />

            {/* Modal and other screens */}
            <Stack.Screen
              name="modal"
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
          </Stack>
        </GestureHandlerRootView>
        {/* </ThemeProvider> */}
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

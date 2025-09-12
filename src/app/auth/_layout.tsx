import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

export default function AuthLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <StatusBar
        style={colorScheme === "dark" ? "light" : "dark"}
        key={`auth-status-bar-${colorScheme === "dark" ? "light" : "dark"}`}
      />
      
      <Stack 
        screenOptions={{ 
          animation: "ios",
          headerShown: false 
        }}
      >
        <Stack.Screen
          name="join-our-network"
          options={{ 
            headerShown: false,
            title: "Join Our Network"
          }}
        />
        <Stack.Screen
          name="login"
          options={{ 
            headerShown: false,
            title: "Login"
          }}
        />
        <Stack.Screen
          name="otp"
          options={{ 
            headerShown: false,
            title: "OTP Verification"
          }}
        />
      </Stack>
    </>
  );
}
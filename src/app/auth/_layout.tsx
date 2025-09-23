import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <StatusBar style={"dark"} />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="join-our-network"
          options={{
            headerShown: false,
            title: "Join Our Network",
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            title: "Login",
          }}
        />
        <Stack.Screen
          name="otp"
          options={{
            headerShown: false,
            title: "OTP Verification",
          }}
        />
      </Stack>
    </>
  );
}

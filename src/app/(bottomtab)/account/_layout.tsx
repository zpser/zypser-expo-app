import { Stack } from "expo-router";

export default function AccountStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="youraccount"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="referral"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="privacyacc"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="notifications"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

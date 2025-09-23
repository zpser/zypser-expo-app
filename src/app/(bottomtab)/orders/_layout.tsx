import { Stack } from "expo-router";

export default function OrdersStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(toptabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[orderId]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

import { Slot, Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";
import { Home } from "./svgs/Home";

export default function Rootlayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="../app/(tabs)/index" />
    </Stack>
  );
}

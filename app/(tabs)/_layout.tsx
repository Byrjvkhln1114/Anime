import { Slot, Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";
import { Home } from "../svgs/Home";

export default function Rootlayout() {
  return (
    <Tabs>
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: "#06C149", fontWeight: "bold" },
          tabBarLabel: "Home",
          tabBarIcon: () => <Home></Home>,
        }}
        name="index"
      />
      <Tabs.Screen name="list" />
    </Tabs>
  );
}

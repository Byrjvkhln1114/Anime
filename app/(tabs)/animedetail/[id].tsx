import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Helo detail bn</Text>
    </View>
  );
}

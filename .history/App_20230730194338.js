import { TailwindProvider } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <TailwindProvider>
      <View>
        <Text className="text-red-500">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar />
      </View>
    </TailwindProvider>
  );
}

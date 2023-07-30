import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <View>
<Text className="text-red-500">
  Open up App.js to start working on your app!
</Text>
<StatusBar />
</View> */
}

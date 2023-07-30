// import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { TailwindProvider } from "tailwindcss-react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </TailwindProvider>
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

import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen() {
  const { text } = styles;

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

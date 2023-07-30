import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen() {
  const { textStyle } = styles;

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
  },
});

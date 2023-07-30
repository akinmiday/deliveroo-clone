import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen() {
  const { textStyle } = styles;

  return (
    <SafeAreaView>
      <View>
        <Text style={textStyle}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
  },
});

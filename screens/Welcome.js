import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "crimson", fontSize: 40, textAlign: "center" },
});

export default Welcome;

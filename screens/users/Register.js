import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "crimson", fontSize: 40, textAlign: "center" },
});

export default Register;

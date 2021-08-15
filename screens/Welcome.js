import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.loginWrapper}>
          <Text style={styles.loginText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "crimson", fontSize: 40, textAlign: "center" },
  loginWrapper: { width: "80%", padding: 20 },
  loginText: { fontSize: 24 },
});

export default Welcome;

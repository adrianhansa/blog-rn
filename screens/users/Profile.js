import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const Profile = ({ navigation }) => {
  const { user, loading, error } = useSelector((state) => state.loggedInUser);
  const getData = AsyncStorage.getItem("token");

  useEffect(() => {
    if (!user.isAuth) {
      navigation.navigate("Login");
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>XX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "crimson", fontSize: 40, textAlign: "center" },
});

export default Profile;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { logout } from "../../redux/actions/userActions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [fullName, setFullName] = useState("");
  const getData = async () => await AsyncStorage.getItem("token");

  useEffect(() => {
    getData()
      .then((result) => {
        setFullName(jwtDecode(result).fullName);
      })
      .catch((error) => console.log(error));
  }, [fullName]);

  return (
    <View style={styles.container}>
      {user.isAuth ? (
        <Text style={styles.title}>Welcome, {fullName}</Text>
      ) : (
        <Text>Hello</Text>
      )}
      <Button
        onPress={() => {
          dispatch(logout());
          navigation.navigate("Login");
        }}
        title="Logout"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "crimson", fontSize: 40, textAlign: "center" },
});

export default Profile;

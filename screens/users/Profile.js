import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { logout } from "../../redux/actions/userActions";
import { getMyPosts } from "../../redux/actions/postActions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { loading, posts, error } = useSelector((state) => state.myPosts);
  const [fullName, setFullName] = useState("");
  const getData = async () => await AsyncStorage.getItem("token");

  useEffect(() => {
    dispatch(getMyPosts());
    getData()
      .then((result) => {
        setFullName(jwtDecode(result).fullName);
      })
      .catch((error) => console.log(error));
  }, [fullName, user]);

  return (
    <View style={styles.container}>
      {user.isAuth ? (
        <>
          <Text style={styles.title}>Welcome, {fullName}</Text>
          {loading ? (
            <Text>Loading...</Text>
          ) : posts ? (
            <FlatList
              data={posts}
              renderItem={({ item }) => <Text>{item.title}</Text>}
              keyExtractor={(item) => item._id}
            />
          ) : (
            <Text>{error}</Text>
          )}
        </>
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

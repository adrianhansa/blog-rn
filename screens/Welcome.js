import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getAllPosts } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  const { allPosts, loading, error } = useSelector((state) => state.allPosts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : allPosts ? (
        <FlatList
          data={allPosts}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text>{error}</Text>
      )}
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

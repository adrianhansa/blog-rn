import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getMyPosts } from "../../redux/actions/postActions";

const AdminPosts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.myPosts);
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : posts ? (
        <>
          <Button
            title="Add Post"
            onPress={() => navigation.navigate("CreatePost")}
          />
          <FlatList
            data={posts}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item) => item._id}
          />
        </>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 30, marginHorizontal: 10 },
});

export default AdminPosts;

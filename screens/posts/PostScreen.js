import React, { useEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/postActions";

const PostScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { loading, success, post, error } = useSelector(
    (state) => state.postDetails
  );
  useEffect(() => {
    dispatch(getPost(route.params.slug));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : success ? (
        <ScrollView style={styles.postContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.author}>
            {post.author.fullName}, {post.author.email}
          </Text>
        </ScrollView>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 5 },
  postContainer: {
    borderColor: "brown",
    borderWidth: 1,
    width: "100%",
  },
  title: { fontSize: 28, textAlign: "center" },
});

export default PostScreen;

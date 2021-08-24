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
    <ScrollView style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : success ? (
        <View style={styles.postContainer}>
          <Text style={styles.title}>{post.title}</Text>
        </View>
      ) : (
        <Text>{error}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  postContainer: {},
  title: { fontSize: 50 },
});

export default PostScreen;

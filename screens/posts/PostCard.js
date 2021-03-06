import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { deletePost,togglePublishPost } from "../../redux/actions/postActions";

const PostCard = ({ post, navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => dispatch(deletePost(post.slug))}
          style={styles.buttonWrapper}
        >
          <Text style={styles.button}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditPost", { slug: post.slug })}
          style={styles.buttonWrapper}
        >
          <Text style={styles.button}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log(post.published)
            dispatch(togglePublishPost(post.slug,!post.published))
            console.log(!post.published,post.slug)
          }}
          style={styles.buttonWrapper}
        >
          <Text style={styles.button}>
            {post.published ? "Unpublish" : "Publish"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  title: { fontSize: 24 },
  content: { fontStyle: "italic" },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 15,
  },
  buttonWrapper: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  button: { color: "red" },
});

export default PostCard;

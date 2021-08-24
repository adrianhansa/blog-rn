import React, { useEffect } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { getPost, updatePost } from "../../redux/actions/postActions";

const EditPost = ({ navigation, route }) => {
  const schemaValidation = yup.object({
    title: yup.string().required(),
    content: yup.string(),
  });
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.postDetails);
  useEffect(() => {
    dispatch(getPost(route.params.slug));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : post ? (
        <>
          <Text style={styles.title}>Update Post</Text>
          <Formik
            initialValues={{
              title: post.title,
              content: post.content,
              published: post.published,
            }}
            schemaValidation={schemaValidation}
            onSubmit={(values) => {
              dispatch(updatePost(route.params.slug,values))
                .then((res) => {
                  console.log(res)
                  navigation.navigate("AdminPosts");
                })
                .catch((error) => console.log(error));
            }}
          >
            {(props) => {
              return (
                <>
                  <TextInput
                    value={props.values.title}
                    onChangeText={props.handleChange("title")}
                    onBlur={props.handleBlur("title")}
                    placeholder="Post title"
                    style={styles.titleInput}
                  />
                  <Text style={styles.error}>
                    {props.touched.title && props.errors.title}
                  </Text>
                  <TextInput
                    value={props.values.content}
                    onChangeText={props.handleChange("content")}
                    onBlur={props.handleBlur("content")}
                    placeholder="Post content"
                    multiline
                    style={styles.contentInput}
                  />
                  <Text style={styles.error}>
                    {props.touched.content && props.errors.content}
                  </Text>
                  <View style={styles.buttonWrapper}>
                    <Button
                      title="Update Post"
                      onPress={props.handleSubmit}
                      style={styles.buttonText}
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        </>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { marginBottom: 20, textAlign: "center", fontSize: 30, color: "blue" },
  titleInput: { borderColor: "grey", borderWidth: 1, padding: 10 },
  contentInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    minHeight: 100,
    height: "auto",
  },
  buttonWrapper: {
    width: "100%",
    backgroundColor: "lightblue",
    borderRadius: 10,
    paddingVertical: 8,
  },
  buttonText: { color: "green" },
  error: { color: "red" },
});

export default EditPost;

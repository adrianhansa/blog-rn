import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/postActions";

const schemaValidation = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  published: yup.boolean().default(false),
});

const CreatePost = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create A Post</Text>
      <Formik
        initialValues={{ title: "", content: "", publish: false }}
        schemaValidation={schemaValidation}
        onSubmit={(values) => {
          dispatch(createPost(values))
            .then(() => {
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
                  title="Create Post"
                  onPress={props.handleSubmit}
                  style={styles.buttonText}
                />
              </View>
            </>
          );
        }}
      </Formik>
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

export default CreatePost;

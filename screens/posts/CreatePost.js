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
              console.log(values);
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
              />
              <Text style={styles.error}>
                {props.touched.content && props.errors.content}
              </Text>
              <Button title="Create Post" onPress={props.handleSubmit} />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
  buttonWrapper: {},
  buttonText: {},
  error: {},
});

export default CreatePost;

import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const schemaValidation = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  published: yup.boolean().default(false),
});

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create A Post</Text>
      <Formik
        initialValues={{ title: "", content: "", publish: false }}
        schemaValidation={schemaValidation}
      >
        {(props) => {
          return (
            <>
              <TextInput
                value={props.values.title}
                onChangeText={props.handleChange("title")}
                onBlur={props.handleBlur}
                placeholder="Post title"
              />
              <Text style={styles.error}>
                {props.touched.title && props.errors.title}
              </Text>
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

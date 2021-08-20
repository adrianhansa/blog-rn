import React, { useEffect } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
//import {getPost, updatePost} from '../../redux/actions/postActions'

const EditPost = ({ navigation, route }) => {
  const schemaValidation = yup.object({
    title: yup.string().required(),
    content: yup.string(),
  });
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Post: {route.params.slug}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  form: {},
  title: {},
  button: {},
  buttonWrapper: {},
});

export default EditPost;

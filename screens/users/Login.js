import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(6),
});

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Welcome");
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <>
              <TextInput
                value={props.values.email}
                placeholder="Email"
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
                style={styles.inputText}
              />
              <Text style={styles.error}>
                {props.touched.email && props.errors.email}
              </Text>
              <TextInput
                value={props.values.email}
                placeholder="Email"
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                secureTextEntry={true}
                style={styles.inputText}
              />
              <Text style={styles.error}>
                {props.touched.password && props.errors.password}
              </Text>
              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={props.handleSubmit}
              >
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "crimson", fontSize: 40, textAlign: "center" },
  inputText: {
    borderColor: "grey",
    borderRadius: 15,
    borderWidth: 1,
    width: "80%",
    padding: 20,
    marginVertical: 5,
  },
  buttonWrapper: {
    width: "80%",
    marginTop: 12,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "crimson",
  },
  login: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
  error: { color: "crimson" },
});

export default Login;

import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userActions";

const validationSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordVerify: yup.string().required().min(6),
});

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Register</Text>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          passwordVerify: "",
        }}
        onSubmit={(values) => {
          dispatch(register(values))
            .then((result) => {
              if (result.isAuth) {
                console.log(result);
                navigation.navigate("Profile");
              }
            })
            .catch((error) => console.log(error));
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <>
              <TextInput
                style={styles.inputText}
                placeholder="Full Name"
                value={props.values.fullName}
                onChangeText={props.handleChange("fullName")}
                onBlur={props.handleBlur("fullName")}
              />
              <Text style={styles.error}>
                {props.touched.fullName && props.errors.fullName}
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                value={props.values.email}
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
              />
              <Text style={styles.error}>
                {props.touched.email && props.errors.email}
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                value={props.values.password}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                secureTextEntry={true}
              />
              <Text style={styles.error}>
                {props.touched.password && props.errors.password}
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Password verify"
                value={props.values.passwordVerify}
                onChangeText={props.handleChange("passwordVerify")}
                onBlur={props.handleBlur("passwordVerify")}
                secureTextEntry={true}
              />
              <Text style={styles.error}>
                {props.touched.passwordVerify && props.errors.passwordVerify}
              </Text>
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={styles.buttonWrapper}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
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
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
  error: { color: "crimson" },
});

export default Register;

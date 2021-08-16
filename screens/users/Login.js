import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(6),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = async () => await AsyncStorage.getItem("token");
    token().then((r) => {
      if (r) {
        navigation.navigate("Profile");
      }
    });
  }, []);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Text style={styles.title}>Login</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            dispatch(login(values)).then((result) => {
              console.log(result.isAuth);
              if (result.isAuth) {
                navigation.navigate("Profile");
              }
            });
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
                  value={props.values.password}
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
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text>Don't have an account ?</Text>
                <Button
                  title="Register"
                  onPress={() => navigation.navigate("Register")}
                />
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
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
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
  error: { color: "crimson" },
});

export default Login;

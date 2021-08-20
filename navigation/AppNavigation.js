import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import Welcome from "../screens/Welcome";
import Login from "../screens/users/Login";
import Register from "../screens/users/Register";
import Profile from "../screens/users/Profile";
import AdminPosts from "../screens/posts/AdminPosts";
import CreatePost from "../screens/posts/CreatePost";
import EditPost from "../screens/posts/EditPost";
import { useSelector } from "react-redux";

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  const { errors, user } = useSelector((state) => state.auth);
  const AdminStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AdminPosts" component={AdminPosts} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="EditPost" component={EditPost} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Welcome") {
              iconName = "home";
            } else if (route.name === "Login") {
              iconName = "login";
            } else if (route.name === "Admin") {
              iconName = "switcher";
            } else if (route.name === "Profile") {
              iconName = "setting";
            }

            return <AntDesign name={iconName} size={24} color="blue" />;
          },
        })}
      >
        <BottomTabs.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        {user.isAuth ? (
          <>
            <BottomTabs.Screen
              name="Admin"
              component={AdminStack}
              options={{ headerShown: false }}
            />
            <BottomTabs.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <BottomTabs.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </>
        )}
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

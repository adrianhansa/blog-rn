import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";

import Welcome from "../screens/Welcome";
import Login from "../screens/users/Login";
import Register from "../screens/users/Register";
import Profile from "../screens/users/Profile";

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
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
        <BottomTabs.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

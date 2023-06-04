import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import Splash from "../screens/SplashScreen";
import Home from "../screens/HomeScreen";
import Profile from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen name="Profile" component={Profile} options={options} />
    </Stack.Navigator>
  );
};

export default MainStack;

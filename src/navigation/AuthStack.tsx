import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import Login from "../screens/Auth/LoginScreen";
import Register from "../screens/Auth/RegisterScreen";
import Splash from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Splash" component={Splash} options={options} />
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen name="Register" component={Register} options={options} />
    </Stack.Navigator>
  );
};

export default AuthStack;

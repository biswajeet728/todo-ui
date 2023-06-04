import React, { useContext, useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./src/navigation/MainStack";
import AuthStack from "./src/navigation/AuthStack";
import { AuthContext } from "./src/context/AuthContext";
import { Toasts } from "@backpackapp-io/react-native-toast";

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./src/assets/fonts/Poppins-Black.ttf"),
          blackBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
          light: require("./src/assets/fonts/Poppins-Light.ttf"),
          medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
          regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
          thin: require("./src/assets/fonts/Poppins-Thin.ttf"),
          rog: require("./src/assets/fonts/Rog-Regular.ttf"),
        });
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    };
    prepare();
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {user !== null ? <MainStack /> : <AuthStack />}
      <Toasts />
    </NavigationContainer>
  );
};

export default Main;

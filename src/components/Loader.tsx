import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#423932",
      }}
    >
      <ActivityIndicator size="large" color="#fefefe" />
    </View>
  );
};

export default Loader;

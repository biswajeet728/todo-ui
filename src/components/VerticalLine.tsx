import { View, Text } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const VerticalLine = () => {
  return (
    <View>
      <View
        style={{
          width: 2,
          height: responsiveHeight(17),
          backgroundColor: "#999",
        }}
      ></View>
    </View>
  );
};

export default VerticalLine;

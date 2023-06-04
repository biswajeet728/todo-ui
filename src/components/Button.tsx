import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { IButtonProps } from "../interfaces";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const Button = ({ title, onPress, disabled = false, icon }: IButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#423932" : "#fefef4",
        marginVertical: disabled ? responsiveHeight(2) : responsiveHeight(2.4),
        width: disabled ? responsiveWidth(48) : responsiveWidth(53),
        paddingVertical: disabled ? responsiveHeight(1.5) : responsiveHeight(2),
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {icon}
        <Text
          style={{
            fontFamily: "blackBold",
            fontSize: disabled
              ? responsiveFontSize(2)
              : responsiveFontSize(2.4),
            color: disabled ? "#fefef4" : "#423932",
            marginTop: 4,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

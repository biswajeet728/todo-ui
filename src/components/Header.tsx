import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Header = () => {
  const navigation: NavigationProp<any> = useNavigation();

  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          marginTop: responsiveHeight(3),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 0.4,
          paddingBottom: responsiveHeight(2),
          borderBottomColor: "#fefefe",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: responsiveFontSize(5),
              fontFamily: "medium",
              color: "#fefefe",
              opacity: 0.8,
              letterSpacing: 1,
            }}
          >
            {" "}
            Target List{" "}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              fontFamily: "regular",
              color: "#fefefe",
              opacity: 0.8,
              letterSpacing: 1,
            }}
          >
            {" "}
            Add, delete or mark as completed{" "}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            borderWidth: 1,
            borderColor: "#fefefe",
            height: responsiveHeight(7),
            width: responsiveHeight(7),
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Feather name="user" size={27} color="#fefefe" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;

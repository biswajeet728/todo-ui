import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import style from "../style";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import VerticalLine from "../components/VerticalLine";
import Button from "../components/Button";
import { AntDesign } from "@expo/vector-icons";

const Splash = ({ navigation }: any) => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View
        style={{
          ...style.container,
          alignItems: "center",
          backgroundColor: "#423932",
        }}
      >
        {/* heading */}
        <View
          style={{
            paddingHorizontal: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontFamily: "blackBold",
              fontSize: 50,
              color: "#fefef4",
            }}
          >
            Tar/Get
          </Text>
        </View>

        {/* vertical lines */}
        <VerticalLine />

        {/* image */}
        <View>
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(25),
              resizeMode: "contain",
            }}
          />
        </View>

        {/* vertical lines */}
        <VerticalLine />

        {/* button */}
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Login")}
          disabled={false}
          icon={<AntDesign name="arrowright" size={24} color="#423932" />}
        />
      </View>
    </>
  );
};

export default Splash;

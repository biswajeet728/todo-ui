import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import style from "../style";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";

const Profile = ({ navigation }: any) => {
  const { logoutUser, getUser, userData, loading } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <Loader />;

  return (
    <View
      style={{
        ...style.container,
        backgroundColor: "#423932",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          marginTop: responsiveHeight(2),
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
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
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#fefefe" />
        </TouchableOpacity>
        <Text
          style={{
            color: "#fefefe",
            fontSize: responsiveFontSize(5.5),
            fontFamily: "blackBold",
            letterSpacing: 1,
            marginTop: 5,
          }}
        >
          {" "}
          Profile{" "}
        </Text>
      </View>

      <View
        style={{
          marginTop: responsiveHeight(2),
          borderWidth: 1,
          borderColor: "#fefef4",
          borderRadius: 3,
          padding: responsiveWidth(3),
        }}
      >
        <View
          style={{
            marginBottom: responsiveHeight(1),
          }}
        >
          <Text
            style={{
              color: "#fefefe",
              fontSize: responsiveFontSize(2),
              fontFamily: "regular",
              opacity: 0.7,
              marginLeft: 2,
            }}
          >
            {" "}
            Name{" "}
          </Text>
          <Text
            style={{
              color: "#fefefe",
              fontSize: responsiveFontSize(2.5),
              fontFamily: "regular",
              opacity: 0.8,
            }}
          >
            {" "}
            {userData?.data?.name}{" "}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#fefefe",
              fontSize: responsiveFontSize(2),
              fontFamily: "regular",
              opacity: 0.7,
              marginLeft: 2,
            }}
          >
            {" "}
            Email{" "}
          </Text>
          <Text
            style={{
              color: "#fefefe",
              fontSize: responsiveFontSize(2.5),
              fontFamily: "regular",
              opacity: 0.8,
            }}
          >
            {" "}
            {userData?.data?.email}{" "}
          </Text>
        </View>

        {/* logout btn */}
        <View>
          <Button
            title="Logout"
            onPress={() => logoutUser()}
            icon={
              <FontAwesome5 name="sign-out-alt" size={20} color="#423932" />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

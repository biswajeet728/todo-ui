import {
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import style from "../../style";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastPosition } from "@backpackapp-io/react-native-toast";

const Register = ({ navigation }: any) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { registerUser, message, loading, error } = useContext(AuthContext);

  useEffect(() => {
    if (message) {
      toast.success(message, {
        duration: 2000,
        position: ToastPosition.BOTTOM,
      });
    }

    if (error) {
      toast.error(error, {
        duration: 2000,
        position: ToastPosition.BOTTOM,
      });
    }
  }, [message, error]);

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
          marginTop: responsiveHeight(5),
        }}
      >
        <Text
          style={{
            fontFamily: "blackBold",
            fontSize: responsiveFontSize(5),
            color: "#fefef4",
          }}
        >
          Register Now
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            fontSize: responsiveFontSize(2.3),
            color: "#fefef4",
            opacity: 0.5,
            letterSpacing: 1,
            marginTop: responsiveHeight(-1),
          }}
        >
          Join With Us And Start !
        </Text>
      </View>

      {/* inputs */}
      <View
        style={{
          marginTop: responsiveHeight(5),
        }}
      >
        <TextInput
          placeholder="Username"
          placeholderTextColor="#fefef4"
          style={{
            borderWidth: 1,
            borderColor: "#fefef4",
            borderRadius: 10,
            paddingHorizontal: responsiveWidth(5),
            paddingVertical: responsiveHeight(2),
            color: "#fefef4",
            fontFamily: "regular",
            fontSize: responsiveFontSize(2),
            marginBottom: responsiveHeight(2.3),
          }}
          value={values.name}
          onChangeText={(text) => setValues({ ...values, name: text })}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#fefef4"
          style={{
            borderWidth: 1,
            borderColor: "#fefef4",
            borderRadius: 10,
            paddingHorizontal: responsiveWidth(5),
            paddingVertical: responsiveHeight(2),
            color: "#fefef4",
            fontFamily: "regular",
            fontSize: responsiveFontSize(2),
            marginBottom: responsiveHeight(2.3),
          }}
          value={values.email}
          onChangeText={(text) => setValues({ ...values, email: text })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#fefef4"
          style={{
            borderWidth: 1,
            borderColor: "#fefef4",
            borderRadius: 10,
            paddingHorizontal: responsiveWidth(5),
            paddingVertical: responsiveHeight(2),
            color: "#fefef4",
            fontFamily: "regular",
            fontSize: responsiveFontSize(2),
          }}
          value={values.password}
          onChangeText={(text) => setValues({ ...values, password: text })}
        />
      </View>

      {/* login button */}
      <Pressable
        style={{
          backgroundColor: "#fefef4",
          paddingVertical: responsiveHeight(2),
          paddingHorizontal: responsiveWidth(5),
          borderRadius: 10,
          marginTop: responsiveHeight(2),
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => registerUser(values, navigation)}
      >
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#423932" />
          </View>
        ) : (
          <Text
            style={{
              fontFamily: "blackBold",
              fontSize: responsiveFontSize(2.2),
              color: "#423932",
              letterSpacing: 1,
            }}
          >
            {" "}
            Register{" "}
          </Text>
        )}
      </Pressable>

      {/* or */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: responsiveHeight(3),
        }}
      >
        <Text
          style={{
            fontFamily: "regular",
            fontSize: responsiveFontSize(2),
            color: "#fefef4",
            opacity: 0.5,
            letterSpacing: 1,
          }}
        >
          Or
        </Text>
      </View>

      {/* buttons */}
      <View
        style={{
          marginTop: responsiveHeight(2),
          flexDirection: "row",
          justifyContent: "center",
          gap: responsiveWidth(2),
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "regular",
            fontSize: responsiveFontSize(2),
            color: "#fefef4",
            opacity: 0.5,
            letterSpacing: 1,
            marginTop: responsiveHeight(0.5),
          }}
        >
          {" "}
          Already a Member?{" "}
        </Text>
        <Pressable
          style={{
            backgroundColor: "#fefef4",
            paddingVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidth(5),
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontFamily: "regular",
              fontSize: responsiveFontSize(2),
              color: "#423932",
              letterSpacing: 1,
            }}
          >
            {" "}
            Login{" "}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

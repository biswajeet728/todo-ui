import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect } from "react";
import style from "../../style";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AuthContext } from "../../context/AuthContext";
import { ToastPosition, toast } from "@backpackapp-io/react-native-toast";

const Login = ({ navigation }: any) => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const { loginUser, loading, error } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        duration: 2000,
        position: ToastPosition.TOP,
      });
    }
  }, [error]);

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
          Login Now
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
          Start Setting Your Target
        </Text>
      </View>

      {/* inputs */}
      <View
        style={{
          marginTop: responsiveHeight(5),
        }}
      >
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
        onPress={() => loginUser(values, navigation)}
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
            Login{" "}
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

      {/* login with google */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#fefef4",
            paddingVertical: responsiveHeight(2.5),
            paddingHorizontal: responsiveWidth(5),
            borderRadius: 10,
            marginTop: responsiveHeight(2),
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: responsiveWidth(60),
          }}
        >
          <Image
            source={require("../../assets/google.png")}
            style={{
              width: responsiveWidth(8),
              height: responsiveHeight(5),
              resizeMode: "contain",
              marginRight: responsiveWidth(2),
            }}
          />
          <Text
            style={{
              fontFamily: "regular",
              fontSize: responsiveFontSize(2),
              color: "#423932",
              letterSpacing: 1,
            }}
          >
            Login with Google
          </Text>
        </Pressable>
      </View>

      {/* buttons */}
      <View
        style={{
          marginTop: responsiveHeight(5),
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
          New Comer?{" "}
        </Text>
        <Pressable
          style={{
            backgroundColor: "#fefef4",
            paddingVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidth(5),
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Register")}
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
            Register{" "}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

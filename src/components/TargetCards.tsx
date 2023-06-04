import { View, Text } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";
import { ITargetProps } from "../interfaces";

const TargetCards = ({
  id,
  title,
  description,
  status,
  statusIcon,
  updateTarget,
  deleteTarget,
}: ITargetProps) => {
  return (
    <View
      style={{
        marginTop: responsiveHeight(3),
      }}
    >
      <View
        style={{
          borderColor: "#999",
          borderWidth: 1,
          borderRadius: 3,
          padding: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            paddingVertical: responsiveHeight(1),
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.9),
              fontFamily: "regular",
              color: "#fefefe",
              opacity: 0.8,
              letterSpacing: 1,
            }}
          >
            {" "}
            {title}{" "}
          </Text>

          <Text
            style={{
              fontSize: responsiveFontSize(1.7),
              fontFamily: "regular",
              color: "#fefefe",
              opacity: 0.8,
              letterSpacing: 1,
              marginLeft: 4,
              marginTop: 5,
            }}
          >
            {" "}
            {description}{" "}
          </Text>

          <View
            style={{
              marginHorizontal: responsiveWidth(2.7),
              marginTop: responsiveHeight(2.6),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              {statusIcon}
              {/* //#5AA7F9 */}
              <Text
                style={{
                  fontSize: responsiveFontSize(1.5),
                  fontFamily: "regular",
                  color: `${status === "Pending" ? "#F0C24F" : "#5AA7F9"}`,
                  opacity: 0.8,
                  letterSpacing: 1,
                  marginTop: 3,
                }}
              >
                {" "}
                {status}{" "}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Feather
                name="edit-2"
                size={18}
                color="#fefefe"
                style={{
                  opacity: 0.5,
                }}
                onPress={async () => await updateTarget(id)}
              />
              <Feather
                name="trash-2"
                size={18}
                color="#fefefe"
                style={{
                  opacity: 0.5,
                }}
                onPress={() => deleteTarget(id)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TargetCards;

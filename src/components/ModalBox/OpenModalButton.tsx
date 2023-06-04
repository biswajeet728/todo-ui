import { View, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";
import { useModal } from "../../store/zustand/useModal";

const OpenModalButton = () => {
  const targetModalOpen = useModal();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        position: "absolute",
        bottom: 40,
        left: 20,
        backgroundColor: "#fefef4",
        height: responsiveHeight(7),
        width: responsiveWidth(14.5),
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => targetModalOpen.openModal()}
    >
      <Feather name="plus" size={32} color="#423932" />
    </TouchableOpacity>
  );
};

export default OpenModalButton;

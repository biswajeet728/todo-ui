import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import ModalBox from "./ModalBox";
import { useModal } from "../../store/zustand/useModal";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";

const AddTargetModal = () => {
  const targetModal = useModal();
  const { loading, addTarget, getTasks } = useContext(AuthContext);

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  return (
    <ModalBox isOpen={targetModal.isModalOpen}>
      {/* heading */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(2.4),
            fontFamily: "medium",
            color: "#423932",
            opacity: 0.8,
            marginTop: 1,
          }}
        >
          {" "}
          Add Target Modal{" "}
        </Text>
        <TouchableOpacity
          onPress={() => targetModal.closeModal()}
          style={{
            height: responsiveHeight(4),
            width: responsiveHeight(4),
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#423932",
          }}
        >
          <Feather name="x" size={24} color="#fefefe" />
        </TouchableOpacity>
      </View>

      {/* input box */}
      <View
        style={{
          marginTop: responsiveHeight(3),
        }}
      >
        <TextInput
          placeholder="Enter Target"
          placeholderTextColor="#423932"
          style={{
            borderWidth: 1,
            borderColor: "#423932",
            height: responsiveHeight(6),
            width: responsiveWidth(81),
            borderRadius: 10,
            paddingHorizontal: 10,
            marginTop: responsiveHeight(0),
            fontFamily: "regular",
            fontSize: responsiveFontSize(1.6),
            color: "#423932",
            marginBottom: responsiveHeight(1),
          }}
          value={values.title}
          onChangeText={(text) => setValues({ ...values, title: text })}
        />
        <TextInput
          placeholder="Enter Description"
          placeholderTextColor="#423932"
          style={{
            borderWidth: 1,
            borderColor: "#423932",
            height: responsiveHeight(6),
            width: responsiveWidth(81),
            borderRadius: 10,
            paddingHorizontal: 10,
            marginTop: 10,
            fontFamily: "regular",
            fontSize: responsiveFontSize(1.6),
            color: "#423932",
          }}
          value={values.description}
          onChangeText={(text) => setValues({ ...values, description: text })}
        />
      </View>
      <View
        style={{
          marginBottom: responsiveHeight(-1.4),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={async () => {
            await addTarget(values, setValues);
            await getTasks();
            targetModal.closeModal();
          }}
          style={{
            backgroundColor: "#423932",
            height: responsiveHeight(8),
            width: responsiveWidth(50),
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: responsiveHeight(2),
          }}
        >
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#fefef4" />
            </View>
          ) : (
            <Text
              style={{
                fontFamily: "medium",
                fontSize: responsiveFontSize(2),
                color: "#fefefe",
              }}
            >
              {" "}
              Add Target
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ModalBox>
  );
};

export default AddTargetModal;

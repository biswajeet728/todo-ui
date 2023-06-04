import React, { useEffect, useState } from "react";
import { View, TouchableWithoutFeedback, Modal, Keyboard } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import * as Animatable from "react-native-animatable";

interface IModalBoxProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const ModalBox: React.FC<IModalBoxProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal transparent>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animatable.View
            animation="fadeInUpBig"
            duration={300}
            style={{
              backgroundColor: "#fefefe",
              width: responsiveWidth(90),
              paddingHorizontal: 17,
              paddingVertical: 22,
              borderRadius: 10,
              elevation: 5,
            }}
          >
            {children}
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalBox;

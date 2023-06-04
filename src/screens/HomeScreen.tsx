import { View, ScrollView, Text } from "react-native";
import React, { useContext, useCallback } from "react";
import style from "../style";
import Header from "../components/Header";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import TargetCards from "../components/TargetCards";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import OpenModalButton from "../components/ModalBox/OpenModalButton";
import AddTargetModal from "../components/ModalBox/AddTargetModal";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  const { tasks, loading, deleteTarget, updateTarget } =
    useContext(AuthContext);

  return (
    <View
      style={{
        ...style.container,
        backgroundColor: "#423932",
        paddingHorizontal: responsiveWidth(5),
        position: "relative",
      }}
    >
      {/* Header */}
      <Header />

      {/* Target Cards */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <View
            style={{
              marginTop: responsiveHeight(20),
            }}
          >
            <Loader />
          </View>
        ) : (
          <>
            {tasks?.length === 0 ? (
              <View
                style={{
                  marginTop: responsiveHeight(10),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="circle-off-outline"
                  size={70}
                  color="#fefef4"
                  style={{
                    opacity: 0.8,
                    marginBottom: responsiveHeight(1),
                  }}
                />
                <Text
                  style={{
                    color: "#fefef4",
                    fontSize: responsiveFontSize(2.5),
                    fontFamily: "medium",
                    opacity: 0.8,
                    marginTop: responsiveHeight(1),
                  }}
                >
                  {" "}
                  Set You Targets Now !{" "}
                </Text>
              </View>
            ) : (
              <>
                {tasks?.map((task: any) => (
                  <TargetCards
                    key={task._id}
                    id={task._id}
                    title={task.title}
                    description={task.description}
                    status={task.isCompleted ? "Done" : "Pending"}
                    statusIcon={
                      task.isCompleted ? (
                        <Ionicons
                          name="checkmark-circle-outline"
                          size={24}
                          color="#5AA7F9"
                        />
                      ) : (
                        <Feather
                          name="clock"
                          size={24}
                          color="#F0C24F"
                          style={{
                            opacity: 0.5,
                          }}
                        />
                      )
                    }
                    updateTarget={updateTarget}
                    deleteTarget={deleteTarget}
                  />
                ))}
              </>
            )}
          </>
        )}
      </ScrollView>

      {/* open modal button */}
      <OpenModalButton />

      {/* add target modal */}
      <AddTargetModal />
    </View>
  );
};

export default Home;

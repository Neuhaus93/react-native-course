import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={{ ...styles.boxStyle, backgroundColor: "red" }}></View>
      {/* <View
        style={{ ...styles.boxStyle, backgroundColor: "green", top: 90 }}
      ></View> */}
      <View
        style={{ ...styles.boxStyle, backgroundColor: "green", marginTop: 90 }}
      ></View>
      <View style={{ ...styles.boxStyle, backgroundColor: "purple" }}></View>

      {/* <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 3,
    // borderColor: "black",
    // height: 200,
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxStyle: {
    height: 90,
    width: 90,
  },
});

export default BoxScreen;

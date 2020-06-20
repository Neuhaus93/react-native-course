import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

interface Action {
  type: "change_red" | "change_green" | "change_blue";
  payload: number;
}

interface State {
  red: number;
  green: number;
  blue: number;
}

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "change_red":
      return state.red + payload > 255 || state.red + payload < 0
        ? state
        : { ...state, red: state.red + payload };

    case "change_green":
      return state.green + payload > 255 || state.green + payload < 0
        ? state
        : { ...state, green: state.green + payload };

    case "change_blue":
      return state.blue + payload > 255 || state.blue + payload < 0
        ? state
        : { ...state, blue: state.blue + payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;

  return (
    <View style={styles.container}>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <Text>{`Current values - Red: ${red}, Green: ${green}, Blue: ${blue}`}</Text>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  counter: {
    marginBottom: 20,
  },
});

export default SquareScreen;

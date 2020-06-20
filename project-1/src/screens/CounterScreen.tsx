import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const VALUE = 1;

interface State {
  counter: number;
}

interface Action {
  type: "increase" | "decrease";
  payload: number;
}

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "increase":
      return { ...state, counter: state.counter + payload };

    case "decrease":
      return { ...state, counter: state.counter - payload };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: VALUE });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: VALUE });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

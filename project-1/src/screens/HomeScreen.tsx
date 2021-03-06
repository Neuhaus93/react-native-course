import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = (props: any) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen Bitch</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => props.navigation.navigate("Colors")}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => props.navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

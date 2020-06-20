import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 30 },
    { name: "Friend #3", age: 40 },
    { name: "Friend #4", age: 35 },
    { name: "Friend #5", age: 50 },
    { name: "Friend #6", age: 53 },
    { name: "Friend #7", age: 60 },
    { name: "Friend #8", age: 59 },
    { name: "Friend #9", age: 41 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => (
        <Text style={styles.textStyle}>
          {index + 1}. {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;

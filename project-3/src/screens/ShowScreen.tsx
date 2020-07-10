import React, { useContext } from "react";
import { NavigationScreenProp } from "react-navigation";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import {
  Context as BlogContext,
  BlogContextType,
  BlogPost,
} from "../context/BlogContext";

interface Props {
  navigation: NavigationScreenProp<any>;
}

const ShowScreen = ({ navigation }: Props) => {
  const { state } = useContext<BlogContextType>(BlogContext);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{blogPost?.title}</Text>
      <Text>{blogPost?.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }: Props) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }>
        <FontAwesome
          style={styles.icon}
          name='pencil'
          size={30}
          color='black'
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export default ShowScreen;

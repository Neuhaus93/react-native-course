import React, { useContext } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';

import {
  Context as BlogContext,
  BlogContextType,
  BlogPost,
} from '../context/BlogContext';

interface Props {
  navigation: NavigationScreenProp<BlogPost>;
}

const ShowScreen = (props: Props) => {
  const { navigation } = props;
  const { state } = useContext<BlogContextType>(BlogContext);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{blogPost?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;

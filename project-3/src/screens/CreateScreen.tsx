import React, { useContext } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { StyleSheet } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';

import {
  Context as BlogContext,
  BlogContextType,
  BlogPost,
} from '../context/BlogContext';

interface Props {
  navigation: NavigationScreenProp<BlogPost>;
}

const ShowScreen = ({ navigation }: Props) => {
  const { addBlogPost } = useContext<BlogContextType>(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;

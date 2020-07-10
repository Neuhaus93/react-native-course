import React, { useContext } from 'react';
import { NavigationScreenProp, StackActions } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

const popAction = StackActions.pop();

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const EditScreen = ({ navigation }: Props) => {
  console.log(navigation);
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{
        title: blogPost?.title || 'Error',
        content: blogPost?.content || 'Error',
      }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.dispatch(popAction));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;

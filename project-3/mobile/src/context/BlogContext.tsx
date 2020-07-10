import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

import { Dispatch, Reducer, ActionProps } from '../interfaces/Interfaces';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface BlogActions extends ActionProps {
  type: 'ADD_BLOGPOST' | 'DELETE_BLOGPOST' | 'EDIT_BLOGPOST' | 'GET_BLOGPOSTS';
  payload?: any;
}

interface BlogContext {
  [actionName: string]: (
    arg1?: any,
    arg2?: any,
    arg3?: any,
    callback?: any
  ) => void;
}

export type BlogContextType = { state: BlogPost[] } & BlogContext;

const blogReducer: Reducer<BlogPost[], BlogActions> = (
  state: BlogPost[],
  action: BlogActions
) => {
  const { type, payload } = action;

  switch (type) {
    case 'DELETE_BLOGPOST':
      return state.filter((blogPost) => blogPost.id !== payload);

    case 'EDIT_BLOGPOST':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case 'GET_BLOGPOSTS':
      return action.payload;

    default:
      return state;
  }
};

const getBlogPosts = (dispatch: Dispatch<BlogActions>) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'GET_BLOGPOSTS', payload: response.data });
  };
};

const addBlogPost = (dispatch: Dispatch<BlogActions>) => {
  return async (title: string, content: string, callback: () => boolean) => {
    await jsonServer.post('/blogposts', { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch: Dispatch<BlogActions>) => {
  return async (id: number) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: 'DELETE_BLOGPOST', payload: id });
  };
};

const editBlogPost = (dispatch: Dispatch<BlogActions>) => {
  return async (id: number, title: string, content: string, callback: any) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({ type: 'EDIT_BLOGPOST', payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext<
  BlogContextType,
  BlogPost[],
  BlogActions
>(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  [] as BlogPost[]
);

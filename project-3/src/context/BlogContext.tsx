import createDataContext from './createDataContext';

import { Dispatch, Reducer, ActionProps } from '../interfaces/Interfaces';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface BlogActions extends ActionProps {
  type: 'ADD_BLOGPOST' | 'DELETE_BLOGPOST';
  payload?: any;
}

interface BlogContext {
  [actionName: string]: (arg1?: any, arg2?: any) => void;
}

export type BlogContextType = { state: BlogPost[] } & BlogContext;

const blogReducer: Reducer<BlogPost[], BlogActions> = (
  state: BlogPost[],
  action: BlogActions
) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: payload.title,
          content: payload.content,
        },
      ];

    case 'DELETE_BLOGPOST':
      return state.filter((blogPost) => blogPost.id !== payload);

    default:
      return state;
  }
};

const addBlogPost = (dispatch: Dispatch<BlogActions>) => {
  return (title: string, content: string) => {
    dispatch({ type: 'ADD_BLOGPOST', payload: { title, content } });
  };
};

const deleteBlogPost = (dispatch: Dispatch<BlogActions>) => {
  return (id: number) => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: id });
  };
};

export const { Context, Provider } = createDataContext<
  BlogContextType,
  BlogPost[],
  BlogActions
>(blogReducer, { addBlogPost, deleteBlogPost }, [] as BlogPost[]);

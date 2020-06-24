import createDataContext from './createDataContext';

import { Dispatch, Reducer, ActionProps } from '../interfaces/Interfaces';

export interface BlogPost {
  title: string;
}

interface BlogActions extends ActionProps {
  type: 'add_blogpost';
  payload?: BlogPost;
}

interface BlogContext {
  [actionName: string]: () => void;
}

export type BlogContextType = { state: BlogPost[] } & BlogContext;

const blogReducer: Reducer<BlogPost[], BlogActions> = (
  state: BlogPost[],
  action: BlogActions
) => {
  const { type } = action;

  switch (type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];

    default:
      return state;
  }
};

const addBlogPost = (dispatch: Dispatch<BlogActions>) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

export const { Context, Provider } = createDataContext<
  BlogContextType,
  BlogPost[],
  BlogActions
>(blogReducer, { addBlogPost }, [] as BlogPost[]);

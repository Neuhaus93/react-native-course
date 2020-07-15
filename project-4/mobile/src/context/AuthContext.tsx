import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { Reducer } from './createDataContext';
import { AsyncStorage } from 'react-native';

import { navigate } from '../navigationRef';

interface Action {
  type: 'ADD_ERROR' | 'SIGNUP';
  payload?: string;
}

interface State {
  errorMessage?: string;
  token?: string | null;
}

interface Credentials {
  email: string;
  password: string;
}

const authReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload };

    case 'SIGNUP':
      return { errorMessage: '', token: action.payload };

    default:
      return state;
  }
};

/**
 * Make api request to sign up with that email and password
 * If we sign up, modify our state, and say that we are authenticated
 * If signing up fails, we probably need to reflect an error message somewhere
 *
 * @param dispatch
 */
const signup = (dispatch: React.Dispatch<Action>) => async ({
  email,
  password,
}: Credentials) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SIGNUP', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong with signup',
    });
  }
};

const signin = (dispatch: React.Dispatch<Action>) => {
  return ({ email, password }: Credentials) => {
    // Try to sign in
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  };
};

const signout = (dispatch: React.Dispatch<Action>) => {
  return () => {
    // Somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { errorMessage: '', token: null }
);

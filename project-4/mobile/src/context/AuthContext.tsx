import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { Reducer } from './createDataContext';
import { AsyncStorage } from 'react-native';

import { navigate } from '../navigationRef';

interface Action {
  type: 'ADD_ERROR' | 'CLEAR_ERROR_MESSAGE' | 'SIGNIN' | 'SIGNOUT';
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

    case 'SIGNIN':
      return { errorMessage: '', token: action.payload };

    case 'SIGNOUT':
      return { errorMessage: '', token: null };

    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, errorMessage: '' };

    default:
      return state;
  }
};

const tryLocalSignin = (dispatch: React.Dispatch<Action>) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'SIGNIN', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const clearErrorMessage = (dispatch: React.Dispatch<Action>) => () => {
  dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
};

/**
 * Make api request to sign up with that email and password
 * If we sign up, modify our state, and say that we are authenticated
 * If signing up fails, we probably need to reflect an error message somewhere
 */
const signup = (dispatch: React.Dispatch<Action>) => async ({
  email,
  password,
}: Credentials) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SIGNIN', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong with signup',
    });
  }
};

/**
 * Try to sign in
 * Handle success by updating state
 * Handle failure by showing error message (somehow)
 */
const signin = (dispatch: React.Dispatch<Action>) => async ({
  email,
  password,
}: Credentials) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'SIGNIN',
      payload: response.data.token,
    });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong with sign in',
    });
  }
};

/**
 * Somehow sign out!!!
 * @param dispatch
 */
const signout = (dispatch: React.Dispatch<Action>) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'SIGNOUT' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { errorMessage: '', token: null }
);

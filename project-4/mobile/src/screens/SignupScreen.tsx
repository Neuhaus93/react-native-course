import React, { useContext } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

// Components
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext } from '../context/AuthContext';

interface Prop {
  navigation: NavigationScreenProp<any>;
}

const SignupScreen = ({ navigation }: Prop) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <ScrollView contentContainerStyle={styles.container}>
        <AuthForm
          headerText='Sign Up for Tracker'
          errorMessage={state.errorMessage}
          submitButtonText='Sign Up'
          onSubmit={signup}
        />
        <NavLink
          routeName='Signin'
          text='Already have an account? Sign in instead!'
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
  },
});

export default SignupScreen;

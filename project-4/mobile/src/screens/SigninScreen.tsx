import React, { useContext } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

// Context
import { Context as AuthContext } from '../context/AuthContext';

// Components
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <ScrollView contentContainerStyle={styles.container}>
        <AuthForm
          headerText='Sign In for Tracker'
          errorMessage={state.errorMessage}
          submitButtonText='Sign In'
          onSubmit={signin}
        />
        <NavLink
          routeName='Signup'
          text="Doesn't have an account? Sign up instead!"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
  },
});

export default SigninScreen;

import React, { useContext } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';

import { Context as AuthContext } from '../context/AuthContext';

interface Prop {
  navigation: NavigationScreenProp<any>;
}

const SignupScreen = ({ navigation }: Prop) => {
  const { state, signup } = useContext(AuthContext);

  const formProps = {
    headerText: 'Sign Up for Tracker',
    errorMessage: state.errorMessage,
    submitButtonText: 'Sign Up',
    onSubmit: signup,
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthForm
          headerText='Sign Up for Tracker'
          errorMessage={state.errorMessage}
          submitButtonText='Sign Up'
          onSubmit={signup}
        />
        {/* <AuthForm {...formProps} /> */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Spacer>
              <Text style={styles.link}>
                Already have an account? Sign in instead
              </Text>
            </Spacer>
          </TouchableOpacity>
        </View>
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
  link: {
    color: 'blue',
  },
});

export default SignupScreen;

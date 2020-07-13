import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

interface Props {
  navigation: NavigationScreenProp<any>;
}

const SignupScreen = ({ navigation }: Props) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>

      <Input label='Email' />
      <Spacer />
      <Input label='Password' />

      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({});

export default SignupScreen;

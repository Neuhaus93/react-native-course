import React, { useState } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

interface Props {
  navigation: NavigationScreenProp<any>;
}

const SignupScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Spacer>
            <Text h3>Sign Up for Tracker</Text>
          </Spacer>

          <Input
            label='Email'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Spacer />
          <Input
            secureTextEntry
            label='Password'
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none'
            autoCorrect={false}
          />

          <Spacer>
            <Button title='Sign Up' />
          </Spacer>
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
    // borderColor: 'red',
    // borderWidth: 10,
    // justifyContent: 'center',
    paddingVertical: 100,
  },
});

export default SignupScreen;

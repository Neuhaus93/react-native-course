import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

import Spacer from './Spacer';

interface Props {
  headerText: string;
  errorMessage: string;
  submitButtonText: string;
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
}

const AuthForm: React.FC<Props> = ({
  headerText,
  errorMessage,
  submitButtonText,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>

      <Input
        label='Email'
        value={email}
        onChangeText={(newValue) => setEmail(newValue.replace(/ /g, ''))}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {/* <Spacer /> */}
      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={(newValue) => setPassword(newValue.replace(/ /g, ''))}
        autoCapitalize='none'
        autoCorrect={false}
      />

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Spacer>
        {/* <Button title='Sign Up' onPress={() => signup({ email, password })} /> */}
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
});

export default AuthForm;

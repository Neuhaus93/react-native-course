import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { View, StyleSheet, Text, Button } from 'react-native';

interface Props {
  navigation: NavigationScreenProp<any>;
}

const TrackListScreen = ({ navigation }: Props) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

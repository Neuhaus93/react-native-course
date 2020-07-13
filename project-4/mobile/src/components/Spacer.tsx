import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  margin?: number;
  children?: ReactNode;
}

const DEFAULT_MARGIN = 15;

const Spacer = ({ margin, children }: Props) => {
  return <View style={{ margin: margin ? margin : 15 }}>{children}</View>;
};

export default Spacer;

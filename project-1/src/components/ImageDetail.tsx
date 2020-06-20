import React from "react";
import { View, Text, StyleSheet, Image, ImageProps } from "react-native";

interface Props {
  imageSource: Readonly<ImageProps>;
  title: string;
  imageScore: number;
}

const ImageDetail = (props: Props) => {
  return (
    <View style={styles.imageView}>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image score - {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    marginBottom: 20,
  },
});

export default ImageDetail;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import yelp from "../api/yelp";

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface Restaurant {
  name: string;
  photos: string[];
}

const ResultsShowScreen = (props: Props) => {
  const { navigation } = props;

  const [result, setResult] = useState<Restaurant>({} as Restaurant);
  const id = navigation.getParam("id");

  console.log(result);

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (Object.keys(result).length === 0 && result.constructor === Object) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;

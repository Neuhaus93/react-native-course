import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Result } from "../interfaces/Interfaces";

const ResultsDetail = ({ result }: { result: Result }) => {
  const starIcon = <FontAwesome name="star" size={14} color="black" />;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating.toFixed(1)} {starIcon} - {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    marginBottom: 5,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;

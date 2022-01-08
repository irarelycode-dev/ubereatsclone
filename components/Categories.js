import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { items } from "../utils/constants";

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, idx) => (
          <View style={styles.category} key={idx}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  category: {
    alignItems: "center",
    marginRight: 20,
  },
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
  },
});
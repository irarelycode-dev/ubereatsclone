import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import HeaderTab from "../components/HeaderTab";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import Bottomtabs from "../components/Bottomtabs";

export default function Home() {
  const [localRestaurants, setLocalRestaurants] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
    const apiKey =
      "yelp api key";  //your yelp api key goes here
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
    fetch(url, apiOptions)
      .then((data) => data.json())
      .then((restos) =>
        setLocalRestaurants(
          restos.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .catch((err) => console.log);
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.homeContainer}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar cityHandler={setCity} />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItem localRestaurants={localRestaurants} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:"column"
  },
  homeContainer: {
    backgroundColor: "#fff",
    padding: 15,
  },
});

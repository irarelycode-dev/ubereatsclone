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
      "65F7_uGhgR-lCxQ4bipEAmT-wKZQGBzBlnyyIZYVVyx9gTf8gde21-2GaCYKhJi-rLFN2-Ph2uQ3I05vv2pj2p3mDHx85nrPvcjc7Rw7_8IRkDTY3D6O8UGN0erGYXYx";
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
        <ScrollView>
          <Categories />
          <RestaurantItem localRestaurants={localRestaurants} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    marginBottom:30
  },
  homeContainer: {
    backgroundColor: "#fff",
    padding: 15,
  },
  scrollContainer: {
    flexDirection: "column",
  },
});

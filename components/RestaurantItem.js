import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem({ localRestaurants }) {
  return (
    <FlatList
      data={localRestaurants}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={<View style={{ marginTop: 10 }} />}
      ListFooterComponent={<View style={{ marginBottom: 20 }} />}
      renderItem={({ item }) => {
        return (
          <View style={{ marginTop: 10, backgroundColor: "#fff", padding: 10 }}>
            <RestaurantImage imageUrl={item.image_url} />
            <RestaurantInfo name={item.name} rating={item.rating} />
          </View>
        );
      }}
    />
  );
}

const RestaurantImage = ({ imageUrl }) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 25 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 10, color: "gray" }}>10am-10pm</Text>
      </View>
      <View>
        <Text
          style={{
            backgroundColor: "gray",
            borderRadius: 10,
            padding: 5,
            color: "#fff",
          }}
        >
          {rating}
        </Text>
      </View>
    </View>
  );
};

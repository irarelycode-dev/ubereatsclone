import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Searchbar({ cityHandler }) {
  const handleCityChange = (data, details) => {
    const city = data.description.split(",")[0];
    cityHandler(city);
  };

  return (
    <View style={styles.searchbarContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{ key: "AIzaSyA8rAognY_er_ntnJTozxYdwv1T_p0EL8A" }}
        onPress={handleCityChange}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              padding: 9,
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 20,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 10 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbarContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
});

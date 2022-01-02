import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTab({activeTab,setActiveTab}) {
  return (
    <View style={styles.headerContainer}>
      <HeaderButton
        text="Delivery"
        btnColor={activeTab === "Delivery" ? "black" : "white"}
        textColor={activeTab === "Delivery" ? "white" : "black"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor={activeTab === "Pickup" ? "black" : "white"}
        textColor={activeTab === "Pickup" ? "white" : "black"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => (
  <View>
    <TouchableOpacity
      style={{ ...styles.textButtons, backgroundColor: btnColor }}
      onPress={() => setActiveTab(text)}
    >
      <Text style={{ ...styles.text, color: textColor }}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  textButtons: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
  },
});

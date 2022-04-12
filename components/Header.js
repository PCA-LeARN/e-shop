import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

function Header({ showBack }) {
  const statusHeight = 65;
  return (
    <View style={[styles.container, { paddingTop: statusHeight }]}>
      {!!showBack && (
        <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
          <Ionicons name="chevron-back-circle-outline" size={30} color="blue" />
        </View>
      )}

      <View style={{ flex: 2, paddingLeft: 15 }}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.Logo}
        />
      </View>

      <View>
        <EvilIcons name="search" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 0.5,
    shadowRadius: 100,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: "hidden",
  },
  Logo: {
    width: 50,
    height: 20,
  },
});

export default Header;

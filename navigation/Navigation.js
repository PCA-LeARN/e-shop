import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../screens/Cart";
import WishList from "../screens/WishList";
import Home from "../screens/Home";
import Account from "../screens/Account";
import StartScreen2 from "../screens/StartScreen2";

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

// (...)
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      style={styles.container}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, image, iconStyle }) => {
          if (route.name == "Home") {
            image = require("../assets/images/home.png");
          }

          if (route.name == "Wish") {
            image = require("../assets/images/heart.png");
          }
          if (route.name == "Bag") {
            image = require("../assets/images/bag.png");
          }
          if (route.name == "User") {
            image = require("../assets/images/user.png");
          }

          return (
            <Image
              source={image}
              style={(image = focused ? styles.imagesFocused : styles.images)}
            />
          );
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={StartScreen2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wish"
        component={WishList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bag"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="User"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  images: {
    width: 25,
    height: 25,
    opacity: 0.25,
    borderRadius: 25 / 2,
    borderWidth: 2,
    borderColor: "blue",
  },
  imagesFocused: {
    width: 20,
    height: 20,
  },
});

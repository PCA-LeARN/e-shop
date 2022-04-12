import React from "react";
import { StyleSheet } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./navigation/Navigation";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();

const getHeader= ({ route }) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  let showBack = true;

  switch (routeName) {
    case "Bag":
    case "Home":
      showBack = false;
      break;
  }

  return <Header showBack={showBack} />;
}

export default function App() {
  return (
    <NavigationContainer style={StyleSheet.Container}>
      <Stack.Navigator
        screenOptions={{
          header: (options) => getHeader(options),
        }}
      >
        <Stack.Screen name="TabNavigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: 812,
  },
});

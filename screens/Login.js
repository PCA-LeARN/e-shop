import { View, Text, Image } from "react-native";
import React from "react";
import { Form, FormItem } from "react-native-form-component";

const logo = require("../assets/logo.png");

export default function Login() {
  return (
    <View>
      <Image source={logo}></Image>
      <Image source={{}></Image>
      <Form onButtonPress={() => console.warn("do something")}>
        <FormItem style={{ borderWidth: 1 }} />
      </Form>
    </View>
  );
}

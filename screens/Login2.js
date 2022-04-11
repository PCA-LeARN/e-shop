import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Form, FormItem, Label } from "react-native-form-component";
import LoginOption from "../components/Login/LoginOption";
import { colors } from "../assets/Colors";
// import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';


const logo = require("../assets/images/logo.png");
const bird = require("../assets/images/bird.png");

export default function Login() {

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
 if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Image source={styles.logo}></Image>
      <LoginOption />
      <Form
        onButtonPress={() => console.warn("do something")}
        buttonStyle={styles.button}
        buttonText="Se conneter"
        buttonTextStyle={styles.buttonText}
      >
        <FormItem
          label="Email ou nom d'utilisateur"
          style={styles.input}
          labelStyle={styles.label}
        />
        <FormItem
          label="Mot de passe"
          isRequired
          style={styles.input}
          labelStyle={styles.label}
        />
      </Form>
      <FormItem style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 50,
  },

  label: {
    marginLeft: 53,
    color:colors.blue,
    fontSize:12,
    fontFamily:"Poppins_100Thin_Italic"
  },

  input: {
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    height: 35,
  },

  buttonText:{
    fontFamily:"Poppins_600SemiBold_Italic"
  },

  logo: {},

  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },

  button: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    opacity: 1,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
});

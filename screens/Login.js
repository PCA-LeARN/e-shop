import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Form, FormItem} from "react-native-form-component";
import LoginOption from "../components/Login/LoginOption";
import { COLORS } from "../assets/Colors";
import { useFonts } from "expo-font";
import { fonts } from "../assets/fonts/fonts";
// import { styles } from "../styles/screens/Login";

const logo = require("../assets/images/eshop.png");

export default function Login() {
  const [loaded] = useFonts({
    Poppins: fonts.poppins,
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{top:"29.5%"}}>
        <Image source={logo} style={styles.logo} />
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
            autoCorrect={false}
          />
          <FormItem
            label="Mot de passe"
            secureTextEntry={true}
            style={styles.input}
            labelStyle={styles.label}
          />
        </Form>
        <Text style={styles.passwordForgot}>Mot de passe oubliés ?</Text>
        <TouchableOpacity style={styles.notYet}>
          <Text style={styles.textNotYet}>Pas encore inscrit ? S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  label: {
    marginLeft: 53,
    color: COLORS.blue,
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "normal",
  },

  passwordForgot: {
    color: COLORS.blue,
    fontSize: 10,
    textDecorationLine: "underline",
    alignSelf: "center",
    marginBottom: 25,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    height: 35,
    fontFamily: "Poppins",
    fontWeight: "normal",
    color: COLORS.blue,
  },

  notYet: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 40,
    height: 45,
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: 15,
  },

  textNotYet: {
    color: COLORS.blue,
    fontFamily: "Poppins",
    alignSelf: "center",
    fontSize: 15,
  },

  buttonText: {
    fontFamily: "Poppins",
    fontWeight: "normal",
  },

  logo: {
    // width: 202,
    height: 79,
    bottom: 50,
    alignSelf: "center",
  },

  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },

  button: {
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    opacity: 1,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom:0,
    marginTop:0
  },
});

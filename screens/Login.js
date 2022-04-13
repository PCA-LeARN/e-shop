import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Form, FormItem} from "react-native-form-component";
import LoginOption from "../components/Login/LoginOption";
import { styles } from "../styles/screens/Login";

const logo = require("../assets/images/eshop.png");

export default function Login() {

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


import { View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import { Form, FormItem } from "react-native-form-component";
import SignUpOption from "../components/SignUp/SignUpOption";
import { styles } from "../styles/screens/SignUp";

const logo = require("../assets/images/eshop.png");

export default function Login() {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <SignUpOption />
        <Form
          onButtonPress={() => console.warn("do something")}
          buttonStyle={styles.button}
          buttonText="Se conneter"
          buttonTextStyle={styles.buttonText}
        >
          <FormItem
            label="Nom d'utilisateur"
            style={styles.input}
            labelStyle={styles.label}
            autoCorrect={false}
          />

          <FormItem
            label="Email"
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
          <FormItem
            label="Confirmation du mot de passe"
            secureTextEntry={true}
            style={styles.input}
            labelStyle={styles.label}
          />
        </Form>
        <TouchableOpacity style={styles.notYet}>
          <Text style={styles.textNotYet}>Déjà inscrit ? Se connecter</Text>
        </TouchableOpacity>
      </View>
  );
}


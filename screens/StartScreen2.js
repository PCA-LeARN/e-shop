import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/screens/StartScreen2";

const logo = require("../assets/images/logo.png");
const startscreen2 = require("../assets/images/startscreen2.png");
export default function StartScreen2() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={startscreen2}
        resizeMode="contain"
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={["transparent", "white"]}
          style={styles.gradient}
        />
        <LinearGradient
          colors={["transparent", "white"]}
          style={styles.gradient}
        />
        <LinearGradient
          colors={["transparent", "white"]}
          style={styles.gradient}
        />
      </ImageBackground>
      <Image source={logo} style={styles.logo} />

      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity style={[styles.notYet, styles.notYetBlue]}>
            <Text style={styles.textNotYet2}>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notYet}>
            <Text style={styles.textNotYet}>S'inscrire</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notYet}>
            <Text style={styles.textNotYet}>
              Se connecter en tant qu'invité
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


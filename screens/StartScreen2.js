import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../assets/Colors";
import { useFonts } from "expo-font";
import { fonts } from "../assets/fonts/fonts";

const height = Dimensions.get("screen").height;
const logo = require("../assets/images/logo.png");
const startscreen2 = require("../assets/images/startscreen2.png");
export default function StartScreen2() {
  const [loaded] = useFonts({
    Poppins: fonts.poppins,
  });
  if (!loaded) {
    return null;
  }

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
        {/* <LinearGradient
          colors={["transparent", "white"]}
          style={styles.gradient}
        /> */}
      </ImageBackground>
      <Image source={logo} style={styles.logo} />

      <View style={{ marginBottom: height * 0.1 }}>
        <View>
          <TouchableOpacity style={styles.notYet2}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    height,
  },

  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height,
    width: "200%",
  },

  logo: {
    width: 100,
    height: 39,
    alignSelf: "center",
    top: -30,
  },

  backgroundImage: {
    flex: 1,
    height,
    width: "200%",
    left: "-118%",
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
    color: "red",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },

  notYet2: {
    backgroundColor: COLORS.blue,
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
    color: "red",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },

  textNotYet: {
    color: COLORS.blue,
    fontFamily: "Poppins",
    alignSelf: "center",
    fontSize: 15,
  },

  textNotYet2: {
    color: COLORS.blue,
    fontFamily: "Poppins",
    alignSelf: "center",
    fontSize: 15,
    color: COLORS.white,
  },

  buttonText: {
    fontFamily: "Poppins",
    fontWeight: "normal",
  },
});

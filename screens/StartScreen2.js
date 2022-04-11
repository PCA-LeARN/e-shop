import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../assets/Colors";
import { useFonts } from "expo-font";
import { fonts } from "../assets/fonts/fonts";

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
        resizeMode="cover"
        style={styles.image}
      >
        <LinearGradient
          colors={["transparent", "white"]}
          style={styles.background}
        />
      </ImageBackground>

      <View style={{marginBottom:"10%"}}>
        <Image source={logo} style={styles.logo} />

        <TouchableOpacity style={styles.notYet2}>
          <Text style={styles.textNotYet2}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notYet}>
          <Text style={styles.textNotYet}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notYet}>
          <Text style={styles.textNotYet}>Se connecter en tant qu'invité</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "90%",
  },

  logo: {
    width: 100,
    height: 39,
    alignSelf: "center",
    bottom: 50,
  },

  image: {
    flex: 1,
    height: "90%",
    width:"50%"
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
    backgroundColor:COLORS.blue,
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
    color:COLORS.white
  },


  buttonText: {
    fontFamily: "Poppins",
    fontWeight: "normal",
  },
});

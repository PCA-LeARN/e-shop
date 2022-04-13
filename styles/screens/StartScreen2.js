import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../assets/Colors";

const height = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },

  notYetBlue: {
    backgroundColor: COLORS.blue,
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

  buttonContainer:{
    marginBottom: height * 0.1
  }
});

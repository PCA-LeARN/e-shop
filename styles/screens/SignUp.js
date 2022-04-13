import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../assets/Colors";

const height = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:0.16*height
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
    marginBottom: 0.03 * height,
    marginTop: 0.2 * height,
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
    width: 0.242 * height,
    height: 0.097 * height,
    bottom: height * 0.062,
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
    marginBottom: height * 0.073,
    marginTop: 0,
  },
});

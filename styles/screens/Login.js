import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/Colors";
import { fonts } from "../../assets/fonts/fonts";

const [loaded] = useFonts({
  Poppins: fonts.poppins,
});

export const styles = StyleSheet.create({
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
    fontFamily: "Pattaya",
    alignSelf: "center",
    fontSize: 15,
  },

  buttonText: {
    fontFamily: "Poppins",
    fontWeight: "normal",
  },

  logo: {
    width: 202,
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
  },
});

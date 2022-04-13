import { StyleSheet } from "react-native";
import { COLORS } from "../../../assets/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 40,
    justifyContent: "space-between",
  },

  column1: {
    width: "10%",
  },
  column2: {
    width: "90%",
  },
  welcomeText: {
    color: COLORS.blue,
    fontSize: 20,
    textAlign: "left",
    marginBottom: "3%",
    width: "90%",
    alignContent: "flex-start",
  },
});

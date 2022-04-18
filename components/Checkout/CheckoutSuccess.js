import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { useFonts } from "expo-font";
import { fonts } from "../../assets/fonts/fonts";
import { COLORS } from "../../assets/Colors";

import { AntDesign } from '@expo/vector-icons';


export default function CheckoutSuccess() {
    //const navigation = useNavigation();

    const [loaded] = useFonts({
        Poppins: fonts.poppins,
      });
      if (!loaded) {
        return null;
      }
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
                <AntDesign name="checkcircle" size={110} color={COLORS.green} />
                <Text style={styles.bodyText}>Votre commande a été éfféctué avec succès !</Text>
                <TouchableOpacity
                    style={styles.addArticleBtn}
                    onPress={() => navigation.navigate("wish") } 
                >
                    <Text style={styles.addArticleTxt}>Continuer les achats</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.followOrder}
                    onPress={() => navigation.navigate() } 
                >
                    <Text style={styles.followOrderTxt}>Suivre votre commande</Text>
                </TouchableOpacity>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:COLORS.purple,
    },
    subContainer: { 
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        //marginTop: 257
      },
      bodyText:{
          color:COLORS.darkblue,
          fontSize: 15,
          marginTop:10,
          fontWeight:'bold',
          marginHorizontal:50,
          marginTop:15,
          textAlign:'center',
          width:275,
          height:44
      },
      addArticleBtn: {
        //alignItems: "center",
        backgroundColor: COLORS.blue,
        borderRadius:10,
        width:275,
        height:40,
        marginTop:35,
        justifyContent:'center',
        marginHorizontal:50
      },
      followOrder:{
        width:275,
        height:40,
        marginTop:25,
        justifyContent:'center',
        marginHorizontal:50,
      },
      addArticleTxt:{
        color:COLORS.purple,
        fontSize: 14,
        alignSelf:'center',
        fontFamily: "Poppins",
      },
      followOrderTxt:{
        color:COLORS.blue,
        fontSize: 14,
        alignSelf:'center',
        fontFamily: "Poppins",
        textDecorationLine: 'underline'
      }
  });
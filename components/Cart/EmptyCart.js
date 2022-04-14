import { View, Text,StyleSheet, Image,TouchableOpacity} from 'react-native'
import React from 'react'

import { useFonts } from "expo-font";
import { fonts } from "../../assets/fonts/fonts";
import { COLORS } from "../../assets/Colors";


export default function EmptyCart() {
    const [loaded] = useFonts({
        Poppins: fonts.poppins,
      });
      if (!loaded) {
        return null;
      }
  return (
      <View style={styles.container}>
          <Text style={styles.headText}>Mon panier</Text>
          <View style={styles.subContainer}>
                <Image
                    style={styles.emptyFolder}
                    source={require("../../assets/images/empty-folder.png")}
                />
                <Text style={styles.bodyText}>Votre liste d'envie est vide</Text>
                <TouchableOpacity
                    style={styles.addArticleBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <Text style={styles.addArticleTxt}>Ajouter des articles</Text>
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
        marginTop: 90
      },
      emptyFolder:{
        width: 90,
        height: 90,
      },
      headText:{
        fontWeight: "bold",
        color:COLORS.darkblue,
        fontFamily: "Poppins",
        marginTop:30,
        fontSize: 20,
        marginLeft:30,
      },
      bodyText:{
          color:COLORS.darkblue,
          fontSize: 20,
          alignSelf:'center',
          marginTop:10
      },
      addArticleBtn: {
        //alignItems: "center",
        backgroundColor: COLORS.blue,
        padding: 10,
        borderRadius:10,
        width:240,
        height:46,
        marginTop:25,
        justifyContent:'center'
      },
      addArticleTxt:{
        color:COLORS.purple,
        fontSize: 20,
        alignSelf:'center',
        fontFamily: "Poppins",
      }
  });
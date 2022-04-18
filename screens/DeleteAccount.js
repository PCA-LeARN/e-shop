import { View, Text,StyleSheet, Image,TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'

import { useFonts } from "expo-font";
import { fonts } from "../assets/fonts/fonts";
import { COLORS } from "../assets/Colors";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function DeleteAccount() {
    const [loaded] = useFonts({
        Poppins: fonts.poppins,
      });
      if (!loaded) {
        return null;
      }
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',marginTop:40,marginLeft:30,}}>
            <TouchableOpacity
                        style={styles.iconBack}
                        onPress={() => navigation.navigate() } 
            >
                <Ionicons name="chevron-back" size={24} color={COLORS.darkblue} />
            </TouchableOpacity>
            <Text style={styles.deleteTxt}>Supprimer mon compte</Text>
        </View>
          <View style={styles.subContainer}>
                <AntDesign name="closecircleo" size={150} color={COLORS.danger}/>
                <Text style={styles.bodyText}>Cette action est irréversible et entraînera la suppression définitive de l’ensemble de vos données.{"\n"}Êtes-vous sûr de vouloir supprimer votre compte ?</Text>
                <View style={{justifyContent:'center',flexDirection:'row',marginHorizontal:30,marginBottom:161}}>
                    <TouchableOpacity
                        style={styles.cancel}
                        onPress={() => {LoginButton} } 
                    >
                        <Text style={styles.Txt1}>Annuler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.deleteBtn}
                        onPress={() => navigation.navigate() } 
                    >
                        <Text style={styles.Txt2}>Supprimer</Text>
                    </TouchableOpacity>
                </View>
         </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:COLORS.purple,
        height:Dimensions.height
    },
    subContainer: { 
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 135
      },
      bodyText:{
          color:COLORS.darkblue,
          fontSize: 14,
          textAlign:'center',
          marginTop:40,
          marginHorizontal:30,
          width:315,
          height:104
      },
      deleteTxt:{
        color:COLORS.darkblue,
        fontSize: 20,
        alignSelf:'center',
        fontFamily: "Poppins",
        fontWeight:'bold'
      },
      iconBack: {        
        marginRight:13
      },
      cancel: {
        borderRadius:10,
        borderWidth:1,
        borderColor:COLORS.blue,
        width:150,
        height:40,
        marginTop:23,
        justifyContent:'center',
        marginRight:15
      },
      deleteBtn: {
        backgroundColor: COLORS.danger,
        borderRadius:10,
        width:150,
        height:40,
        marginTop:23,
        justifyContent:'center',
      },
      Txt1:{
        color:COLORS.darkblue,
        fontSize: 14,
        alignSelf:'center',
        fontFamily: "Poppins",
      },
      Txt2:{
        color:COLORS.purple,
        fontSize: 14,
        alignSelf:'center',
        fontFamily: "Poppins",
      }
  });
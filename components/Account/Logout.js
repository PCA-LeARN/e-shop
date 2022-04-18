import { View, Text,StyleSheet, Image,TouchableOpacity} from 'react-native'
import React, {useEffect , useState} from 'react'

import { useFonts } from "expo-font";
import { fonts } from "../../assets/fonts/fonts";
import { COLORS } from "../../assets/Colors";
import { MaterialIcons } from '@expo/vector-icons';

export default function Logout({isLogged, setIsLogged}) {
    //const [isLogged, setIsLogged] = useState(false)

    const [loaded] = useFonts({
        Poppins: fonts.poppins,
      });
      if (!loaded) {
        return null;
      }

      const LoginButton=async ()=>{
        setIsLogged(false)
      }
  return (
    <View style={styles.container}>
          {isLogged ?
          <View style={styles.subContainer}>
                <TouchableOpacity
                    style={styles.logout}
                    onPress={() => navigation.navigate() } 
                >
                    <Text style={styles.Txt}>Se déconnecter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deleteAccount}
                    onPress={() => navigation.navigate() } 
                >
                    <Text style={styles.Txt}>Supprimer mon compte</Text>
                </TouchableOpacity>                
         </View>
            :null}
            <View>
                    <Text style={styles.copyright}>
                        Copyright © 2022 eShop - Fashion Store App. Tous droits réservés.
                    </Text >
                    <Text style={styles.version}>V 1.0.0</Text>
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
        justifyContent:'center',
        alignItems:'center',
      },
      logout: {
        borderRadius:10,
        borderWidth:1,
        borderColor:COLORS.danger,
        width:315,
        height:50,
        marginTop:45,
        justifyContent:'center',
        marginHorizontal:30,
      },
      deleteAccount: {
        width:315,
        height:23,
        marginTop:45,
        justifyContent:'center',
        marginHorizontal:30,
      },
      Txt:{
        color:COLORS.danger,
        fontSize: 16,
        alignSelf:'center',
        fontFamily: "Poppins",
      },
      copyright:{
        color:COLORS.blue,
        fontSize: 8,
        alignSelf:'center',
        fontFamily: "Poppins",
        marginTop:80
      },
      version:{
        color:COLORS.blue,
        fontSize: 8,
        alignSelf:'center',
        fontFamily: "Poppins",
        marginTop:5,
        marginBottom:173
      }
  });
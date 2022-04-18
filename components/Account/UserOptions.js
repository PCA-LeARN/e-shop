import { View, Text,StyleSheet, Image,TouchableOpacity} from 'react-native'
import React, {useEffect , useState} from 'react'

import { useFonts } from "expo-font";
import { fonts } from "../../assets/fonts/fonts";
import { COLORS } from "../../assets/Colors";
import { MaterialIcons } from '@expo/vector-icons';

export default function UserOptions({isLogged, setIsLogged}) {
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
          <View >
                <TouchableOpacity
                    style={styles.personalInfoBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.personalInfoTxt}>Mes informations personnelles</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.passwordBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.personalInfoTxt}>Modifier le mot de passe</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.headText}>Achats</Text>
                <TouchableOpacity
                    style={styles.orderBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.personalInfoTxt}>Mes commandes</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.paymentBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.personalInfoPayTxt}>Mes moyens de paiement</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.gray} />
                    </View>
                </TouchableOpacity>
         </View>
          :null}
    </View>
  )
}


const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:COLORS.purple,
        justifyContent:'center',
        alignItems:'center'
    },
    subContainer: { 
      justifyContent:'center',
      alignItems:'center',
    },
      headText:{
        fontWeight: "bold",
        color:COLORS.darkblue,
        fontFamily: "Poppins",
        fontSize: 12,
        marginLeft:30,
      },
      bodyText:{
          color:COLORS.blue,
          fontSize: 20,
          alignSelf:'center',
          marginTop:15,
          fontWeight:'bold'
      },
      orderBtn: {
        backgroundColor: COLORS.skinblue,
        borderRadius:10,
        width:315,
        height:50,
        marginTop:15,
        justifyContent:'center',
        marginHorizontal:30,
        marginBottom:15
      },
      paymentBtn: {
        backgroundColor: COLORS.lsblue,
        borderRadius:10,
        width:315,
        height:50,
        justifyContent:'center',
        marginHorizontal:30,
      },
      personalInfoBtn: {
        backgroundColor: COLORS.skinblue,
        borderRadius:10,
        width:315,
        height:50,
        marginTop:45,
        justifyContent:'center',
        marginHorizontal:30,
        marginBottom:15
      },
      passwordBtn: {
        backgroundColor: COLORS.skinblue,
        borderRadius:10,
        width:315,
        height:50,
        justifyContent:'center',
        marginHorizontal:30,
        marginBottom:15
      },
      personalInfoTxt:{
        color:COLORS.darkblue,
        fontSize: 16,
        alignSelf:'center',
        fontFamily: "Poppins",
      },
      personalInfoPayTxt:{
        color:COLORS.gray,
        fontSize: 16,
        alignSelf:'center',
        fontFamily: "Poppins",
      }
  });
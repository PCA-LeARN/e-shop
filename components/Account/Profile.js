import { View, Text,StyleSheet, Image,TouchableOpacity} from 'react-native'
import React, {useEffect , useState} from 'react'

import { useFonts } from "expo-font";
import { fonts } from "../../assets/fonts/fonts";
import { COLORS } from "../../assets/Colors";
import { MaterialIcons } from '@expo/vector-icons';


export default function Profile({isLogged, setIsLogged}) {

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
          <Text style={styles.headText}>Mon Profile</Text>
          <View style={styles.subContainer}>
          {!isLogged ?  <Image
                    style={styles.userProfile}
                    source={require("../../assets/images/user.png")}
                />:
                <Image
                    style={styles.userProfile}
                    source={require("../../assets/images/userConnected.jpeg")}
                />}
              {isLogged ?  <Text style={styles.bodyText}>Cica Houégnon</Text>:null}
                {!isLogged ? <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.signUp}
                        onPress={() => {LoginButton} } 
                    >
                        <Text style={styles.signUpTxt}>S'inscrire</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => navigation.navigate() } 
                    >
                        <Text style={styles.signInTxt}>Se connecter</Text>
                    </TouchableOpacity>
                </View> : null}
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
        //marginTop: 25
      },
      userProfile:{
        width: 100,
        height: 100,
        borderRadius:100/2,
        borderWidth:2,
        borderColor:COLORS.blue
      },
      headText:{
        fontWeight: "bold",
        color:COLORS.darkblue,
        //fontFamily: "Poppins",
        marginTop:30,
        fontSize: 20,
        marginLeft:30,
      },
      bodyText:{
          color:COLORS.blue,
          fontSize: 20,
          alignSelf:'center',
          marginTop:15,
          fontWeight:'bold'
      },
      signUp: {
        borderRadius:10,
        borderWidth:1,
        borderColor:COLORS.blue,
        width:150,
        height:50,
        marginTop:45,
        justifyContent:'center',
        marginHorizontal:30,
        marginBottom:45
      },
      signIn: {
        //alignItems: "center",
        backgroundColor: COLORS.blue,
        //padding: 10,
        borderRadius:10,
        width:150,
        height:50,
        marginTop:45,
        justifyContent:'center',
        marginHorizontal:30,
        marginBottom:45
      },
      signUpTxt:{
        color:COLORS.darkblue,
        fontSize: 16,
        alignSelf:'center',
        fontFamily: "Poppins",
      },
      signInTxt:{
        color:COLORS.purple,
        fontSize: 16,
        alignSelf:'center',
        fontFamily: "Poppins",
      }

  });
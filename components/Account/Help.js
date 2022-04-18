import { View, Text,StyleSheet, Image,TouchableOpacity} from 'react-native'
import React from 'react'

import { useFonts } from "expo-font";
import { fonts } from "../../assets/fonts/fonts";
import { COLORS } from "../../assets/Colors";
import { MaterialIcons } from '@expo/vector-icons';

export default function Help() {
    const [loaded] = useFonts({
        Poppins: fonts.poppins,
      });
      if (!loaded) {
        return null;
      }
  return (
    <View style={styles.container}>
          
          <View >
              <Text style={styles.headText}>Aides</Text>
                <TouchableOpacity
                    style={styles.helpBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.Txt}>Questions fréquentes</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.helpBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.Txt}>Nous contacter</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
         </View>

         <View style={styles.subContainer}>
              <Text style={styles.headText}>Assistance et aide juridique</Text>
                <TouchableOpacity
                    style={styles.helpBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.Txt}>Mentions légales</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.helpBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.Txt}>Politiques de confidentialités</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.helpBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.Txt}>Conditions générales d'utilisation</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.helpBtn}
                    onPress={() => navigation.navigate() } 
                >
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={styles.Txt}>Conditions générales de vente</Text>
                        <MaterialIcons name="navigate-next" size={24} color={COLORS.darkblue} />
                    </View>
                </TouchableOpacity>
         </View>

      </View>
  )
}


const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:COLORS.purple,
        justifyContent:'center',
        alignItems:'center',
    },
      headText:{
        fontWeight: "bold",
        color:COLORS.darkblue,
        fontFamily: "Poppins",
        marginTop:20,
        fontSize: 12,
        marginLeft:30,
       // textAlign:'right'
        
      },
      bodyText:{
          color:COLORS.blue,
          fontSize: 20,
          alignSelf:'center',
          marginTop:15,
          fontWeight:'bold'
      },
      helpBtn: {
        backgroundColor: COLORS.skinblue,
        borderRadius:10,
        width:315,
        height:50,
        marginTop:15,
        justifyContent:'center',
        marginHorizontal:30,
      },
      Txt:{
        color:COLORS.darkblue,
        fontSize: 16,
        alignSelf:'center',
        fontFamily: "Poppins",
      },
  });
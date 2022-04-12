import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/Colors'

export default function LoginOption() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue à nouveau !</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flexDirection:"row",
    marginLeft:40,
    justifyContent:'space-between'

  },

  column1:{
    width:"10%"
  },
  column2:{
    width:"90%"
  },
  welcomeText:{
    color:COLORS.blue,
    fontSize:20,
    textAlign:"left",
    marginBottom:25,
    width:"90%",
    alignContent:'flex-start'



  }
})
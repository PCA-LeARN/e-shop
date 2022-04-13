import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/components/Login/LoginOption'


export default function LoginOption() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue à nouveau !</Text>
    </View>
  )
}


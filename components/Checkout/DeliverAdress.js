import { View, Text } from 'react-native'
import React from 'react'
import { Form, FormItem } from 'react-native-form-component'

export default function DeliverAdress() {
  return (
    <View style={{}}>
      <Text style={{}}>DeliverAdress</Text>
        <FormItem label='Nom et Prénom' style={{}}/>
        <FormItem label='N° et nom de rue' style={{}}/>
        <View style={{flexDirection:"row"}}>
        <FormItem label='Code postal' style={{width:"30%", margin:10}}/>
        <FormItem label='Ville' style={{width:"60%", margin:10}}/>
        </View>
        <FormItem label='Pays' style={{}}/>
    </View>
  )
}
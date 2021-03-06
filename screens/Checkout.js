import { View, Text } from 'react-native'
import React from 'react'
import BillingAdress from '../components/Checkout/BillingAdress'
import DeliverAdress from '../components/Checkout/DeliverAdress'
import DeliverTotalCart from '../components/Checkout/DeliverTotalCart'
import CheckoutSuccess from '../components/Checkout/CheckoutSuccess'

export default function Checkout() {
  return (
    <View>
        <DeliverAdress/>
        <BillingAdress/>
        <DeliverTotalCart/>
        <CheckoutSuccess/>
    </View>
  )
}
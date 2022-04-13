import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../assets/Colors";

export default function DeliverTotalCart() {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%", justifyContent: "flex-start" }}>
          <Text style={{fontFamily:"Poppins", color:COLORS.blue, textAlign:"left", margin:5, paddingLeft:15, paddingRight:15, fontSize:14}}>Total HT</Text>
          <Text style={{fontFamily:"Poppins", color:COLORS.blue, textAlign:"left", margin:5, paddingLeft:15, paddingRight:15, fontSize:14}}>TVA</Text>
          <Text style={{fontFamily:"Poppins", color:COLORS.blue, textAlign:"left", margin:5, paddingLeft:15, paddingRight:15, fontSize:14}}>Total TTC</Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{fontFamily:"Poppins", color:COLORS.blue, textAlign:"right", margin:5, paddingLeft:15, paddingRight:15, fontSize:14}}>£ 325,25</Text>
          <Text style={{fontFamily:"Poppins", color:COLORS.blue, textAlign:"right", margin:5, paddingLeft:15, paddingRight:15, fontSize:14}}>£ 25</Text>
          <Text style={{fontFamily:"Poppins", color:COLORS.blue, textAlign:"right", margin:5, paddingLeft:15, paddingRight:15, fontSize:14}}>£ 280,20</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.blue,
          margin: 20,
          borderRadius: 10,
          height: 40,
          justifyContent: "space-around",
        }}
      >
        <Text style={{ color: COLORS.white, textAlign: "center" }}>
          Procéder au paiement £ 280,20
        </Text>
      </TouchableOpacity>
    </View>
  );
}

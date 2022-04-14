import React from "react";
import { View, Text,StyleSheet,FlatList } from "react-native";
import Header from "../components/Header";
import { COLORS } from "../assets/Colors";
import { useFonts } from "expo-font";
import { fonts } from "../assets/fonts/fonts";
import WishProduct from "../components/WishList/WishProduct";

import data from '../'

function Wishlist() {
  const [loaded] = useFonts({
    Poppins: fonts.poppins,
  });
  if (!loaded) {
    return null;
  }

  const DATA = [
    {
       id:1,
       title:"Sac à main fleurie",
       categories:"Sac à main",
       images:"../assets/images/logo.png",
       initial_price:"£ 525,25",
       final_price:"£ 325,25"
    },
    {
        id:2,
        title:"Jogging Violet eShop",
        categories:"Street wear",
        images:"../assets/images/logo.png",
        initial_price:"",
        final_price:"£ 225,99"
     },
     {
        id:3,
        title:"Pantalon Noir eShop",
        categories:"Pantalon",
        images:"../assets/images/logo.png",
        initial_price:"£ 125,99",
        final_price:"£ 75,99"
     },
     {
      id:4,
      title:"Pantalon Noir eShop",
      categories:"Pantalon",
      images:"../assets/images/logo.png",
      initial_price:"£ 125,99",
      final_price:"£ 75,99"
   },
   {
    id:5,
    title:"Pantalon Noir eShop",
    categories:"Pantalon",
    images:"../assets/images/logo.png",
    initial_price:"£ 125,99",
    final_price:"£ 75,99"
 },
 {
  id:6,
  title:"Pantalon Noir eShop",
  categories:"Pantalon",
  images:"../assets/images/logo.png",
  initial_price:"£ 125,99",
  final_price:"£ 75,99"
},
{
  id:7,
  title:"Pantalon Noir eShop",
  categories:"Pantalon",
  images:"../assets/images/logo.png",
  initial_price:"£ 125,99",
  final_price:"£ 75,99"
},
{
  id:8,
  title:"Pantalon Noir eShop",
  categories:"Pantalon",
  images:"../assets/images/logo.png",
  initial_price:"£ 125,99",
  final_price:"£ 75,99"
},

 ]

 
  return (
    <View style={styles.container}>
        <Text style={styles.headText}>Ma liste d'envie</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => <WishProduct product={item}/>}
          keyExtractor={(item) => item.id.toString()}
          nestedScrollEnabled
        />
        </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor:"#D4D3F2" 
  },
  headText:{
    fontWeight: "bold",
    color:COLORS.darkblue,
   // fontFamily: "Poppins",
    marginTop:50,
    fontSize: 20,
    marginLeft:30,
    marginBottom:20 
  },
});


export default Wishlist;

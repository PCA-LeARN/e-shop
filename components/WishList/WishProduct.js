import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'



export default function WishProduct({product}) {
    //const product=this.props.product
  return (

<View style={styles.main_container}>
      <Image
          style={styles.product_image}
          source={require("../../assets/images/sac-a-main-fleurie.jpeg")}
      />
      <View style={styles.content_container}>
            <View style={{marginTop:5,flexDirection:'column'}}>
                <View style={styles.title_view}><Text style={styles.title_text}>{product.title}</Text></View>
                <View style={styles.categories_view}><Text style={styles.categories_text}>{product.categories}</Text></View>  
            </View>
            <View style={styles.bag_view}>
                <View style={styles.price_view}>
                        <View style={{flexDirection:"row"}}>
                                <Text style={styles.price_text1}>{product.initial_price}</Text>
                                <Text style={styles.price_text2}>{product.final_price}</Text>
                        </View>
                </View>
                <Image
                      style={styles.bag_image}
                      source={require("../../assets/images/bag.png")}
                  />
            </View> 
      </View>
</View>

    
  )
}

const styles = StyleSheet.create({
    main_container: {
      width:315,
     // height: 95,
      flexDirection: 'row',
      backgroundColor: "#B9B8E3",

      marginVertical : 5,
      borderRadius:10,
      //marginHorizontal:30,
      justifyContent : 'center',
    alignItems : 'center',
    //paddingHorizontal : "7%",
      marginHorizontal:30
     // flex:1
      
    },
    product_image: {
      width: 100,
      height: 95,
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10
      //margin: 5,
      //backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
      flexDirection: 'column',
      margin: 5,
      //width: 175,
      //height: 61,
      marginBottom:17,
      marginTop:17,
      marginLeft:20,
      marginRight:20,
      justifyContent:'space-between'
    },
    header_container: {
      //flexDirection: 'column',
    },
    bag_image:{
        width: 15,
        height: 15,
        alignSelf: 'flex-end'
    },
    title_view:{
        width: 175,
        height: 20,
    },
    categories_view:{
        width: 175,
        height: 12,
    },
    price_view:{
        width: 150,
        height: 17,
        justifyContent:'flex-end'
        //flexDirection:'column',

       // margin:10
    },
    bag_view:{
        // a enlever
        //borderColor:'red',
        //borderWidth:1,
        flexDirection:'row',
        marginTop:10,

        
        
    },
    title_text: {
      //fontWeight: 'bold',
      fontSize: 14,
      paddingRight: 5,
      fontFamily: "Poppins",
    },
    categories_text: {
      fontSize: 9,
      fontFamily: "Poppins",
      color: '#34316E'
    },
    price_text1: {
        fontSize:12,
        fontFamily: "Poppins",
        color: "#34316E",
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
        //marginRight:5
    },
    price_text2: {
        fontSize:12,
        color: '#34316E',
        fontWeight:'bold',
        marginLeft:7
        //fontFamily: "Poppins",
      }
  })
  
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
            <View style={styles.price_view}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.price_text1}>{product.initial_price}</Text>
                <Text style={styles.price_text2}>{product.final_price}</Text>

              </View>
                <View style={{top:0,right:0,}}>
                    <Image
                        style={styles.bag_image}
                        source={require("../../assets/images/bag.png")}
                    />
                </View> 
            </View>
      </View>
</View>

    
  )
}

const styles = StyleSheet.create({
    main_container: {
      flexDirection: 'row',
      backgroundColor: "#B9B8E3",
      marginVertical : 5,
      borderRadius:10,
      marginHorizontal:30,
     flex:1,      
    },
    product_image: {
      width: "32%",
      height:100,
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10
    },
    content_container: {
      flex: 1,
      marginVertical:17,
      marginHorizontal:10,
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
        height: 20,
        marginRight:0
    },
    categories_view:{
        height: 12,
        marginRight:0
    },
    price_view:{
        marginTop:10,
        flexDirection:"row",
        marginRight:10,
        //position:'relative',
        justifyContent:'space-between'
    },
    title_text: {
      fontSize: 14,
      paddingRight: 5,
      fontFamily: "Poppins",
      color: '#34316E',
    },
    categories_text: {
      fontSize: 9,
      fontFamily: "Poppins",
      color: '#34316E',
      opacity:0.75
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
  
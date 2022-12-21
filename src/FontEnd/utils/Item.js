import { View, Text, TouchableOpacity, StyleSheet, Dimensions,Image } from 'react-native'
import { API_URL } from './localhost'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const {height, width} = Dimensions.get('window')
const Item = ({props}) => {
    const navigation = useNavigation();
    const url_image = props.images[0].url.substr(24,props.images[0].url.length - 24)
  return (
    <TouchableOpacity 
        style={styles.divProductSale}
        onPress={()=> navigation.navigate('DetailProductOrder',{item: props})}
    >
        <Image
        style={styles.imageProductSale}
        resizeMode="contain"
        source={{uri:`${API_URL}${url_image}`}}
        />
        <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
        <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>
            {props.name}
        </Text>
        <Text style={{marginLeft: 10,fontSize:14,color:"green"}}>{props.price}đ  <Text style={{fontSize:12,color:"red"}}>số lượng:{props.quantity}</Text></Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    imageProductSale:{
        width:180,
        height:((width/2)-20)-30,
        backgroundColor:'transparent',
        position:'absolute',
        top:-45
      },
      divProductSale:{
        width:(width/2)-20,
        padding:10,
        borderRadius:10,
        marginTop:55,
        marginBottom:5,
        marginLeft:10,
        alignItems:'center',
        elevation:8,
        shadowOpacity:0.3,
        shadowRadius:50,
        backgroundColor:'white',
      }
})

export default Item
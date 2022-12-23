import { Text, TouchableOpacity, Image, StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import { API_URL } from '../../utils/localhost';
import { useNavigation } from '@react-navigation/native';
var {height, width} = Dimensions.get('window');
const ListProductSale = ({id, item}) => {
    const navigation = useNavigation();
    const url_image = item.images[0].url.substr(24,item.images[0].url.length - 24)
    
  return (
    <TouchableOpacity
        style={styles.divProductSale}
        onPress={() => navigation.navigate('DetailProductSale', {
          id:id})}
    >
        <Image
        style={styles.imageProductSale}
        resizeMode="contain"
        source={{uri: `${API_URL}${url_image}`}} />
        <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
        <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>
            {item.name}
        </Text>
        <Text style={{marginLeft: 10,fontSize:14,color:"green"}}>{item.price}đ  <Text style={{fontSize:12,color:"red"}}>số lượng:{item.quantity}</Text></Text>
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

export default ListProductSale
import { View, Text, Image } from 'react-native'
import { API_URL } from '../../utils/localhost'
import React from 'react'

const ItemCart = ({item}) => {``
    const url_image = item.imageUrl.substr(24,item.imageUrl.length - 24)
  return (
    <View style={{flexDirection:'row', marginTop: 10,marginBottom: 10}}>
      <Image style={{height: 50,width: 50}} source={{uri:`${API_URL}${url_image}`}}/>
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 15}}>{item.name}</Text>
        <Text style={{fontSize: 13,color:'green'}}>{item.price}đ</Text>
        <Text style={{color:'#BBBBBB',fontSize: 13}}>Thể loại :{item.categories[0].name}</Text>
      </View>
    </View>
  )
}

export default ItemCart
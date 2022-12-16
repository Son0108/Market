import { Text, TouchableOpacity, Image, StyleSheet, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

var {height, width} = Dimensions.get('window');
const DetailProductOrder = ({navigation, route}) => {
    const [amount, setAmount] = useState("1");
  return (
    <View>
      <View style={styles.modalContent}>
          <Image style={styles.imageView} resizeMode="contain" source={route.params.image}/>
          <Text  style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>{route.params.name}</Text>
          <Text style={{fontSize:14,color:"green"}}>{route.params.price}đ <Text style={{fontSize:14,color:"red"}}>-{route.params.sale}</Text></Text>
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity onPressIn={() => setAmount(amount-1)}>
              <AntDesign name="minuscircleo" size={30} color="#DB3022" />
            </TouchableOpacity>
            <Text style={{width: 80, height: 35, backgroundColor:'#DDDDDD', fontSize:20, padding: 5, marginLeft: 5, marginRight: 5, borderRadius: 10, textAlign: 'center'}}>{amount}</Text>
            <TouchableOpacity onPressIn={() => setAmount(parseInt(amount)+1)}>
              <AntDesign name="pluscircleo" size={30} color="#DB3022" />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                  <View style={styles.buttonAdd}>
                      <Text style={{ fontWeight: 'bold',color:'#DB3022'}}>Thêm vào giỏ hàng</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.buttonClose}>
                      <Text style={{fontWeight: 'bold',color:'white'}}>Đóng</Text>
                  </View>
              </TouchableOpacity>
          </View>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  buttonClose: {
    backgroundColor: '#DB3022',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#DB3022',
    marginLeft: 10
  },
  buttonAdd: {
      backgroundColor: '#FFFF',
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      borderColor: '#DB3022',
      marginRight: 10
  },
  modalContent: {
      height: height,
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
  },
  imageView : {
      width: (width/2),
      height:(width/2), 
  }
})

export default DetailProductOrder
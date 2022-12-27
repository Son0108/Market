import { View, Text, TouchableOpacity, Dimensions, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../utils/localhost';
import React, { useState } from 'react'
import ItemCart from './ItemCart'
import { useNavigation } from '@react-navigation/native';
import {status} from '../../utils/status'

const {height, width} = Dimensions.get('window')
const ShoppingCart = ({cart, state, tokens, handleDelete, setHandleDelete}) => {
  console.log(cart)
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  let deleteCart = () => {
    AsyncStorage.getItem('@token').then(async tokens => {
      fetch(`${API_URL}/cart/buyer-delete?`+ new URLSearchParams({
          id: cart.id
      }), {
          method:'DELETE',
          headers: {
              authorization:"Bearer "+tokens.replace(/"/g,'')
      }})
      .then(response => {
        if(response.status == 200) {
          setHandleDelete(!handleDelete);
          setShow(false)
        } else if (response.status == 500) {
          console.log("NOK")
        }
      }).catch(err => {
          console.log(err)
})})}

  var filtered = status.filter(stat => stat.id == state)
  return (
      <View style={{backgroundColor:'#FFFF', borderRadius:10, padding: 20, marginBottom: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Messenger',{
        selectMessage: cart.sellerUser,
        tokens:tokens})}>
          <Text style={{fontSize: 20, fontWeight:'500'}}>{cart.sellerUser.fullname}</Text>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, flexDirection: 'row',justifyContent:'space-between'}}>
          <Text style={{color:'#BBBBBB',fontSize: 14}}>{cart.sellerUser.email}</Text>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Text style={{color:'#BBBBBB',fontSize: 14}}>Sửa</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{width: width-150}}>
            {cart.items.map((item,index) => 
              <ItemCart key={index} item={item}/>
            )}
            <Text style={{color: '#F4A460'}}>{filtered[0].value}</Text>
            <Text style={{color:'red'}}>Tổng tiền : {cart.amount}đ</Text>
          </View>
          
          <View>
            {show ? <TouchableOpacity onPress={() => deleteCart()} style={{flex:1,backgroundColor:'#DB3022',width: 70, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color: '#FFFF'}}>XÓA</Text>
            </TouchableOpacity>: ''}
            
          </View>
        </View>
        
      </View>
  )
}

export default ShoppingCart
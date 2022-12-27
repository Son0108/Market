import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../../utils/localhost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShoppingCart from './ShoppingCart';

const {height, width} = Dimensions.get('window')
const Order = ({navigation,route}) => {
  const [carts, setCarts] = useState("")
  const [token, setToken] = useState("")
  const [handleDelete, setHandleDelete] = useState(false)
  useEffect(() => {
    fetchCart();
  },[handleDelete])
  const fetchCart = async () => {
    AsyncStorage.getItem('@token').then(async tokens => {
      setToken(tokens)
      const response = await fetch(`${API_URL}/cart/get-buy-cart?` +  new URLSearchParams({
        pageNumber: 1,
        pageSize: 10
      }),{
        method: 'GET',
        headers: {
          authorization:"Bearer "+tokens.replace(/"/g,'')
        }
      })
      const data = await response.json();
      setCarts(data.payload)
    })
  }
  return (
    <SafeAreaView style={{ margin: 20}}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 50, marginLeft: 5, marginRight: 10}}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <View style={{marginTop: 40, marginBottom: 30}}>
          <Text style={{fontSize: 36, fontWeight: '700'}}>Giỏ hàng</Text>
        </View>
      </View>
      <ScrollView
        style={{height: height-150}}
        showsVerticalScrollIndicator={false}
      >
        {carts?carts.map((cart,index) => 
          <ShoppingCart key={cart.id} cart={cart} state={cart.status} tokens={token} handleDelete={handleDelete} setHandleDelete={setHandleDelete}/>
        ):''}
      </ScrollView>
    </SafeAreaView>
)}

export default Order

const styles = StyleSheet.create({})
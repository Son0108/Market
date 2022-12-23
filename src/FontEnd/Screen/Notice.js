import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { API_URL } from '../utils/localhost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SellCart from '../SellCart/SellCart';

const Notice = () => {
  const [carts, setCarts] = useState("")
  const [editCart, setEditCart] = useState(false);
  useEffect(() => {
    fetchCart();
  },[editCart])
  const fetchCart = async () => {
    AsyncStorage.getItem('@token').then(async tokens => {
      const response = await fetch(`${API_URL}/cart/get-sell-cart?` +  new URLSearchParams({
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
  })}
  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
      <View style={{height: '10%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>THÔNG BÁO</Text>
      </View>
      <ScrollView
       showsVerticalScrollIndicator={false}>
        {carts?carts.map((cart, index) => <SellCart key={index} cart={cart} editCart={editCart} setEditCart={setEditCart}/>):''}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notice

import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../../utils/localhost';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import ShoppingCart from './ShoppingCart';

const Order = ({navigation}) => {
  const [cart, setCart] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      AsyncStorage.getItem('@token').then(async tokens => {
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
        console.log(data.payload[0].items)
        setCart(data.payload)
      })
    }
    fetchData();
  },[])


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

      {/* <ShoppingCart /> */}
    </SafeAreaView>
)}

export default Order

const styles = StyleSheet.create({})
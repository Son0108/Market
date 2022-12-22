import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../../utils/localhost';
import ShoppingCart from './ShoppingCart';

const Order = ({navigation,route}) => {
  let showCart = route.params.showCart;
  let carts = route.params.carts;
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
      <ScrollView>
        {carts?carts.map((cart,index) => 
          <ShoppingCart key={index} cart={cart} showCart={showCart} />
        ):''}
      </ScrollView>
    </SafeAreaView>
)}

export default Order

const styles = StyleSheet.create({})
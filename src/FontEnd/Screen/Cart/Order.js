import React, { Component } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export class Order extends Component {
  orders = [ {
    name : 'Giày Nike Air Force',
    price: '2323',
    quantity: '3',
  },
  {
    name : 'Giày Nike Air Force',
    price: '2323',
    quantity: '3',
  }]
  render() {
    const {navigation} = this.props;
    return (
        <SafeAreaView style={{ margin: 20}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 20}}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>

          <View style={{marginTop: 40, marginBottom: 30}}>
            <Text style={{fontSize: 36, fontWeight: '700'}}>Giỏ hàng</Text>
          </View>

          <FlatList
          data = {this.orders}
          numColumns={1}
          renderItem={({item}) => 
            <TouchableOpacity style={{
              backgroundColor: '#fff',
              flex: 1, 
              height: 150,
              marginBottom: 20
            }}
            onPress={() => navigation.navigate('OrderDetail')}
            >
            <Text>{item.name}</Text>
            <Text style={{color:'#FF6666',}}>{item.price}  <Text style={{color:'#FF0000', textAlign:'right'}}>-{item.sale}</Text></Text>
          </TouchableOpacity>}
        ></FlatList>
        </SafeAreaView>
  )}}

export default Order
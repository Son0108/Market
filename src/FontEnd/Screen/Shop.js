import { Text, View, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity, Button } from 'react-native'

import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export class Shop extends Component {
  sanphams = [ {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: true,
    sale: '50%'
  },
  {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: true,
    sale: '50%'
  },
  {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: false,
    sale: '0%'
  },
  {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: true,
    sale: '50%'
  },
  {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: true,
    sale: '50%'
  },
  {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: false,
    sale: '50%'
  }]
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD'}}>
        <View style={{justifyContent:'center', alignItems:'center',width: '100%', backgroundColor: '#FF6699', height: 140}}>
          <Image style={{width:60, height: 60}} source={require('../assets/Images/logo.png')}/>
          <Text style={{color: '#fff', fontWeight:'bold', fontSize: 25, marginTop: 10}}>CỬA HÀNG</Text>
        </View>
        <Button onPress={() => {navigation.navigate('Newproduct')}} title='Thêm sản phẩm'></Button>
        <FlatList
          data = {this.sanphams}
          numColumns={2}
          renderItem={({item}) => <TouchableOpacity style={{
            backgroundColor: '#fff',
            flex: 0.5, 
            height: 200,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10
          }}
          onPress={() => {navigation.navigate('Modifyproduct')}}
          >
            <Image style={{width: '100%',height: '75%'}} source={require('../assets/ImageShop/giay.jpg')}></Image>
            <Text>{item.name}</Text>
            <Text style={{color:'#FF6666',}}>{item.price}  <Text style={{color:'#FF0000', textAlign:'right'}}>-{item.sale}</Text></Text>
          </TouchableOpacity>}
        ></FlatList>
    </SafeAreaView>
    )
  }
}

export default Shop
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
  },
  {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: false,
    sale: '50%'
  },
  {
    image : '../assets/Images/voucher.png',
    name : 'Giày Nike Air Force',
    price: '2323',
    isSale: false,
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
       <View style={{height: '10%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>CỬA HÀNG</Text>
        </View>

        <View style={{height: '80%'}}>
          <FlatList
            data = {this.sanphams}
            numColumns={2}
            renderItem={({item}) => <TouchableOpacity style={{
              backgroundColor: '#fff',
              flex: 0.5, 
              height: 200,
              marginBottom: 10,
              marginLeft: 5,
              marginRight: 5
            }}
            onPress={() => {navigation.navigate('Modifyproduct')}}
            >
              <Image style={{width: '100%',height: '75%'}} source={require('../assets/ImageShop/giay.jpg')}></Image>
              <Text>{item.name}</Text>
              <Text style={{color:'#FF6666',}}>{item.price}  <Text style={{color:'#FF0000', textAlign:'right'}}>-{item.sale}</Text></Text>
            </TouchableOpacity>}
          ></FlatList>
        </View>
      <Button onPress={() => {navigation.navigate('Newproduct')}} title='Thêm sản phẩm'></Button>
    </SafeAreaView>
    )
  }
}

export default Shop
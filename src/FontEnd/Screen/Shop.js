import { Text, View, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity, Button } from 'react-native'

import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ListProductSale from './SaleProduct/ListProductSale';
const sanphams = [ {

  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '0%'
},
{
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
}]

export class Shop extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD'}}>
       <View style={{height: '10%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>CỬA HÀNG</Text>
        </View>

        <View style={{height: '80%'}}>
          <FlatList
            data = {sanphams}
            numColumns={2}
            renderItem={({item}) => <ListProductSale item={item}/>}
          ></FlatList>
        </View>
      <Button onPress={() => {navigation.navigate('Newproduct')}} title='Thêm sản phẩm'></Button>
    </SafeAreaView>
    )
  }
}

export default Shop
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'
import React, { Component, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ListProduct from './Product/ListProduct';
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';

var {height, width} = Dimensions.get('window');
const sanphams = [ {
  id: 1,
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  id: 2,
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  id: 3,
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '0%'
},
{
  id: 4,
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  id: 5,
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  id: 6,
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
},
{
  id: 7,
  image : require('../assets/ImageShop/giay.jpg'),
  name : 'Giày Nike Air Force',
  price: '2323',
  sale: '50%'
}]
const banners = [{
  image: require('../assets/Banner/banner.jpg')
},{
  image: require('../assets/Banner/banner2.jpg')
},{
  image: require('../assets/Banner/banner3.png')
},{
  image: require('../assets/Banner/banner4.jpg')
},]

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#DDDDDD'}}>
      <View style={{height: height/9, marginTop: 40,flexDirection:'row', borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}}>
        <Text style={{fontSize: 40, marginLeft: 110,  fontWeight: '700', marginTop: 20}}>SHOPPING</Text>
      </View>

      <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'row'}}>
        <TextInput style={{backgroundColor:'#FFFF', height: 60, width: '90%', borderRadius: 10, marginLeft: '5%'}} placeholder='Nhập sản phẩm cần tìm'></TextInput>
        <TouchableOpacity>
          <FontAwesome style={{marginLeft: -50, marginTop: 15}} name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Swiper style={{height: width/2}}
      showsButtons={false} autoplay={true} autoplayTimeout={4}
      >
        {banners.map((banner) => {
          return (<Image resizeMode="contain" source={banner.image}/>)
        })}
      </Swiper>

      <View style={{padding:30,flexDirection:'row', width: width, height: 80,alignItems:'center', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width: 40,height: 40}} source={require('../assets/Images/voucher.png')}></Image>
          <Text>Voucher</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width: 40,height: 40}} source={require('../assets/Images/freeship.png')}></Image>
          <Text>Miễn phí vận chuyển</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => {navigation.navigate('Order')}}>
          <Image style={{width: 40,height: 40}} source={require('../assets/Images/shoppingcart.png')}></Image>
          <Text>Giỏ hàng</Text>
        </TouchableOpacity>  
      </View>  

      <FlatList
        data={sanphams}
        numColumns={2}
        renderItem={({item, index}) => <ListProduct key={index} item={item}/>}
      />
    </ScrollView>
  )
}

export default HomeScreen
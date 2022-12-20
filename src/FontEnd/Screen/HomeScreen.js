import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { API_URL } from '../utils/localhost';
import { FontAwesome } from '@expo/vector-icons';
import ListProduct from './Product/ListProduct';
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const HomeScreen = ({navigation}) => {
  const [categories, setCategories] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      AsyncStorage.getItem('@token').then(async tokens => {
        const response = await fetch(`${API_URL}/category/get-all`,{
          method: 'GET',
          headers: {
            authorization:"Bearer "+tokens.replace(/"/g,'')
          }
        })
        const data = await response.json();
        setCategories(data)
      })
    }
    fetchData();
  },[])
  return (
    <ScrollView >
      <View style={{backgroundColor: '#DDDDDD'}}>
        <View style={{height: height/9, marginTop: 40,flexDirection:'row', borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}}>
          <Text style={{fontSize: 40, marginLeft: 110,  fontWeight: '700', marginTop: 20}}>SHOPPING</Text>
        </View>

        <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'row'}}>
          <TextInput style={{paddingLeft: 10,paddingRight: 10,backgroundColor:'#FFFF', height: 60, width: '90%', borderRadius: 10, marginLeft: '5%'}} placeholder='Nhập sản phẩm cần tìm'></TextInput>
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
        
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categories.payload}
          renderItem={({item}) => _renderCatogories(item)}
          keyExtractor = {(item,index)=> index.toString()}
        ></FlatList>

        <FlatList
          data={sanphams}
          numColumns={2}
          renderItem={({item, index}) => <ListProduct key={index} item={item}/>}
        />
      </View>
    </ScrollView>
  )
}

function _renderCatogories(item) {
  return (
    <TouchableOpacity onPress={() => console.log(item.id)} style={{ backgroundColor: '#FFFF', borderRadius: 5, padding: 10, marginTop: 10, marginRight: 5, marginLeft: 5}}>
      <Text style={{fontSize: 14}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default HomeScreen
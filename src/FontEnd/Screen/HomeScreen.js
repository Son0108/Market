import {  Image, SafeAreaView, Text, TouchableOpacity, View, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/localhost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
import Categories from '../utils/Categories';
import ItemRow from '../utils/ItemRow';

var {height, width} = Dimensions.get('window');
const sanphams = [ {
  id: 1,
  name: "naruto",
  description: "ewewe",
  status: 1,
  type: 1,
  price: 34424,
  quantity: 54,
  createdAt: '2022-12-20T18:39:18.585Z',
  updatedAt: '2022-12-20T18:40:56.090Z',
  categories: [
    {
        id: 2,
        name: "Tủ lạnh",
        description: "Tủ Lạnh",
        type: 1,
        status: 1,
        createdAt: "2022-12-08T05:12:20.363Z",
        updatedAt: "2022-12-08T05:12:20.363Z"
    }
],
  images: [
      {
          id: 17,
          itemId: 7,
          url: 'http://localhost:3000/v1/file/0af0d6e4-496c-423b-9c61-90c63d42f883.jpg',
          type: 1,
          status: 1,
          createdAt: '2022-12-20T18:40:56.090Z',
          updatedAt: '2022-12-20T18:40:56.090Z'
      }
  ]
},
{
  id: 2,
  name: "onepice",
  description: "ewewe",
  status: 1,
  type: 1,
  price: 34424,
  quantity: 54,
  createdAt: '2022-12-20T18:39:18.585Z',
  updatedAt: '2022-12-20T18:40:56.090Z',
  categories: [
    {
        id: 2,
        name: "Tủ lạnh",
        description: "Tủ Lạnh",
        type: 1,
        status: 1,
        createdAt: "2022-12-08T05:12:20.363Z",
        updatedAt: "2022-12-08T05:12:20.363Z"
    }
],
  images: [
      {
          id: 17,
          itemId: 7,
          url: 'http://localhost:3000/v1/file/0af0d6e4-496c-423b-9c61-90c63d42f883.jpg',
          type: 1,
          status: 1,
          createdAt: '2022-12-20T18:40:56.090Z',
          updatedAt: '2022-12-20T18:40:56.090Z'
      }
  ]
},
{
  id: 3,
  name: "alime",
  description: "ewewe",
  status: 1,
  type: 1,
  price: 34424,
  quantity: 5,
  createdAt: '2022-12-20T18:39:18.585Z',
  updatedAt: '2022-12-20T18:40:56.090Z',
  categories: [
    {
        id: 2,
        name: "Tủ lạnh",
        description: "Tủ Lạnh",
        type: 1,
        status: 1,
        createdAt: "2022-12-08T05:12:20.363Z",
        updatedAt: "2022-12-08T05:12:20.363Z"
    }
],
  images: [
      {
          id: 17,
          itemId: 7,
          url: 'http://localhost:3000/v1/file/0af0d6e4-496c-423b-9c61-90c63d42f883.jpg',
          type: 1,
          status: 1,
          createdAt: '2022-12-20T18:40:56.090Z',
          updatedAt: '2022-12-20T18:40:56.090Z'
      }
  ]
},
{
  id: 4,
  name: "avatar4",
  description: "ewewe",
  status: 1,
  type: 1,
  price: 34424,
  quantity: 54,
  createdAt: '2022-12-20T18:39:18.585Z',
  updatedAt: '2022-12-20T18:40:56.090Z',
  categories: [
    {
        id: 2,
        name: "Tủ lạnh",
        description: "Tủ Lạnh",
        type: 1,
        status: 1,
        createdAt: "2022-12-08T05:12:20.363Z",
        updatedAt: "2022-12-08T05:12:20.363Z"
    }
],
  images: [
      {
          id: 17,
          itemId: 7,
          url: 'http://localhost:3000/v1/file/0af0d6e4-496c-423b-9c61-90c63d42f883.jpg',
          type: 1,
          status: 1,
          createdAt: '2022-12-20T18:40:56.090Z',
          updatedAt: '2022-12-20T18:40:56.090Z'
      }
  ]
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
  let [categories, setCategories] = useState("");
  
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
            setCategories(data.payload)
            })
        }
        fetchData();
    },[])
  
  return (
    <SafeAreaView style={{height:height - 50,backgroundColor: '#DDDDDD'}}>
        <View style={{marginTop: 40, marginBottom: 20, flexDirection: 'row'}}>
          <TextInput style={{paddingLeft: 10,paddingRight: 10,backgroundColor:'#FFFF', height: 60, width: '90%', borderRadius: 10, marginLeft: '5%'}} placeholder='Nhập sản phẩm cần tìm'></TextInput>
          <TouchableOpacity>
            <FontAwesome style={{marginLeft: -50, marginTop: 15}} name="search" size={30} color="black" />
          </TouchableOpacity>
        </View>
        
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Swiper style={{height: width/2}}
          showsButtons={false} autoplay={true} autoplayTimeout={4}
          >
            {banners.map((banner,index) => {
              return (<Image resizeMode="contain" source={banner.image}/>)
            })}
          </Swiper>
          
          {/* categorie */}
          <Categories props={categories}/>

          <ItemRow props={sanphams}/>

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
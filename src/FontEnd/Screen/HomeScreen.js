import {  Image, SafeAreaView, RefreshControl, TouchableOpacity, View, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/localhost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
import Categories from '../HomeScreen/Categories';
import ItemRow from '../HomeScreen/ItemRow';

var {height, width} = Dimensions.get('window');

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
  let [items, setItems] = useState("")
  let [categorieId, setCategorieId] = useState([1]);
  let [textSearch, setTextSearch] = useState("");
  useEffect(() => {
    fetchDataItem();
  },[categorieId])

  const fetchDataItem = async () => {
    AsyncStorage.getItem('@token').then(async tokens => {
      const response = await fetch(`${API_URL}/item/search-items?` +  new URLSearchParams({
        categoryId:categorieId,
        pageNumber: 1,
        pageSize: 10,
        searchText:textSearch,
        sortField:"",
        sortType:"asc"
      }),{
        method: 'GET',
        headers: {
          authorization:"Bearer "+tokens.replace(/"/g,'')
        }
      })
      const item = await response.json();
      setItems(item.payload)
    })
  }

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
          <TextInput onChangeText={name => setTextSearch(name)} style={{paddingLeft: 10,paddingRight: 10,backgroundColor:'#FFFF', height: 60, width: '90%', borderRadius: 10, marginLeft: '5%'}} placeholder='Nhập sản phẩm cần tìm'></TextInput>
          <TouchableOpacity onPress={() => setCategorieId([])}>
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
          <Categories props={categories} categoriesId= {setCategorieId}/>

          <ItemRow props={items}/>

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
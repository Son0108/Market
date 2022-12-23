import { Text, View, SafeAreaView, RefreshControl, FlatList, Button, Dimensions } from 'react-native'
import { API_URL } from '../utils/localhost';
import React, { useState, useEffect, useCallback } from 'react'
import ListProductSale from './SaleProduct/ListProductSale';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const {height, width} = Dimensions.get('window')
const Shop = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState("");
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(setRefreshing(false),2000)
  }, []);
  useEffect(() => {
    fetchData();
    const willFocusSubscription = navigation.addListener('focus', () => {
      fetchData();
  });

  return willFocusSubscription;
  },[])

  const fetchData = async () => {
    AsyncStorage.getItem('@token').then(async tokens => {
      const response = await fetch(`${API_URL}/item/get-owned-items?` +  new URLSearchParams({
        pageNumber: 1,
        pageSize: 10
      }),{
        method: 'GET',
        headers: {
          authorization:"Bearer "+tokens.replace(/"/g,'')
        }
      })
      const data = await response.json();
      setItems(data)
    })
  }

  return (
    <SafeAreaView style={{height:height - 50,backgroundColor: '#DDDDDD'}}>
     <View style={{height: '10%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>KHO HÀNG</Text>
      </View>

      <View style={{height: '80%'}}>
        <FlatList
          data = {items.payload}
          numColumns={2}
          renderItem={({item}) => <ListProductSale key={item.id} id={item.id} item={item} />}
          onRefresh={()=>onRefresh()}
          refreshing={refreshing}
        ></FlatList>
      </View>
    <Button onPress={() => {navigation.navigate('Newproduct')}} title='Thêm sản phẩm'></Button>
  </SafeAreaView>
  )
}

export default Shop
import { Text, View, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity, Button } from 'react-native'
import { API_URL } from '../utils/localhost';
import React, { useState, useEffect } from 'react'
import ListProductSale from './SaleProduct/ListProductSale';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Shop = ({navigation}) => {
  const [items, setItems] = useState("");
  const [addNew, setAddNew] = useState(false);
  useEffect(() => {
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
    fetchData();
  },[addNew])

  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD'}}>
     <View style={{height: '10%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>CỬA HÀNG</Text>
      </View>

      <View style={{height: '80%'}}>
        <FlatList
          data = {items.payload}
          numColumns={2}
          renderItem={({item}) => <ListProductSale key={item.id} id={item.id} item={item} addNew={addNew} setAddNew={setAddNew}/>}
        ></FlatList>
      </View>
    <Button onPress={() => {navigation.navigate('Newproduct', {addNew: addNew, setAddNew:setAddNew})}} title='Thêm sản phẩm'></Button>
  </SafeAreaView>
  )
}

export default Shop
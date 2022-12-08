import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';

export class HomeScreen extends Component {

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
      <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
        <View style={{justifyContent:'center', alignItems:'center',width: '100%', backgroundColor: '#FF6699', height: 140}}>
          <Image style={{width:60, height: 60}} source={require('../assets/Images/logo.png')}/>
          <View style={{backgroundColor: '#fff',borderRadius: 5, width:'80%', height: 40, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Image style={{display: 'flex',height:25, width: 25}} source={require('../assets/Images/search.png')}/>
            <TextInput placeholder='Nhập sản phẩm cần tìm' style={{ marginLeft: -30, width:'90%', borderRadius:6}}></TextInput>
          </View>
        </View>

        <View style={{padding:30,flexDirection:'row', width: '100%', height: 80,alignItems:'center', justifyContent: 'space-between'}}>
          <TouchableOpacity style={{alignItems:'center'}}>
            <Image style={{width: 40,height: 40}} source={require('../assets/Images/voucher.png')}></Image>
            <Text>Voucher</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center'}}>
            <Image style={{width: 40,height: 40}} source={require('../assets/Images/freeship.png')}></Image>
            <Text>Miễn phí vận chuyển</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{alignItems:'center'}} onPress={() => {navigation.navigate('Shoppingcart')}}>
            <Image style={{width: 40,height: 40}} source={require('../assets/Images/shoppingcart.png')}></Image>
            <Text>Giỏ hàng</Text>
          </TouchableOpacity>  
        </View>  
    
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
          onPress={() => navigation.navigate('Detailproduct')}
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

export default HomeScreen
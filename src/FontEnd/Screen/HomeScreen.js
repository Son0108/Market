import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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

  banners = [{
    image: require('../assets/Banner/banner.jpg')
  },{
    image: require('../assets/Banner/banner2.jpg')
  },{
    image: require('../assets/Banner/banner3.png')
  },{
    image: require('../assets/Banner/banner4.jpg')
  },]

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
        <View style={{height: '9%', marginTop: 40,flexDirection:'row', borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}}>
          <Text style={{fontSize: 40, marginLeft: 110,  fontWeight: '700', marginTop: 20}}>SHOPPING</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <AntDesign style={{marginLeft: 80}} name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'row'}}>
          <TextInput style={{backgroundColor:'#FFFF', height: 60, width: '90%', borderRadius: 10, marginLeft: '5%'}} placeholder='Nhập sản phẩm cần tìm'></TextInput>
          <FontAwesome style={{marginLeft: -50, marginTop: 15}} name="search" size={30} color="black" />
        </View>

        <SwiperFlatList
         style={{height: 250}}
          autoplay
          autoplayDelay={4}
          autoplayLoop
          showPagination
          data={this.banners}
          renderItem={({ item }) => (
            <View>
              <Image source={item.image}></Image>
            </View>
          )}
        />
        <View style={{padding:30,flexDirection:'row', width: '100%', height: 80,alignItems:'center', justifyContent: 'space-between'}}>
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
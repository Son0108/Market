import { Image, SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';

export class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD'}}>
        <View style={{justifyContent:'center', alignItems:'center',width: '100%', backgroundColor: '#FF6699', height: 140}}>
          <Image style={{width:60, height: 60}} source={require('../assets/Images/logo.png')}/>
          <View style={{backgroundColor: '#fff',borderRadius: 5, width:'80%', height: 40, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Image style={{display: 'flex',height:25, width: 25}} source={require('../assets/Images/search.png')}/>
            <TextInput placeholder='Nhập sản phẩm cần tìm' style={{ marginLeft: -30, width:'90%', borderRadius:6}}></TextInput>
          </View>
        </View>

        <View style={{padding:30,flexDirection:'row', width: '100%', height: 80,alignItems:'center', justifyContent: 'space-between'}}>
          <View>
            <Image style={{width: 40,height: 40}} source={require('../assets/Images/voucher.png')}></Image>
            <Text>Voucher</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Image style={{width: 40,height: 40}} source={require('../assets/Images/freeship.png')}></Image>
            <Text>Miễn phí vận chuyển</Text>
          </View> 
          <View>
          <Image style={{width: 40,height: 40}} source={require('../assets/Images/shoppingcart.png')}></Image>
            <Text>Giỏ hàng</Text>
          </View>  
        </View>  
    
        <View style={{flexDirection:'row', width: '100%', height: 150, justifyContent: 'space-between'}}>
          <View style={{backgroundColor:'#fff', width:'49%', alignItems: 'center'}}>
            <Image style={{width: '100%',height: '80%'}} source={require('../assets/ImageShop/giay.jpg')}></Image>
            <Text>Giày Nike Air Force</Text>
            <Text>đ200.000</Text>
          </View>
          <View style={{backgroundColor:'#fff', width:'49%', alignItems: 'center'}}>
            <Image style={{width: '100%',height: '80%'}} source={require('../assets/ImageShop/giay.jpg')}></Image>
            <Text>Giày Nike Air Force</Text>
            <Text>đ200.000</Text>
          </View>
        </View>
        
      </SafeAreaView>
    )
  }
}

export default HomeScreen
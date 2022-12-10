import { Dimensions, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

const {width, height} = Dimensions.get('window')
export class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{height: height,justifyContent:'center', alignItems:'center'}}>
        <Image style={{marginBottom: 50}} source={require('../assets/Images/logo.png')}></Image>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{justifyContent:'center', alignItems:'center',backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{color: '#FFFF', fontSize: 20, fontWeight:'600'}}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{marginTop: 20,justifyContent:'center', alignItems:'center',backgroundColor: '#FFFFF',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center', borderWidth: 1, borderColor: '#DB3022'}}>
            <Text style={{color: '#DB3022', fontSize: 20, fontWeight:'600'}}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home
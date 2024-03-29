import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class SignupSuccess extends Component {
  render() {
    const {height, width} = Dimensions.get('window')
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{height: height,width: width,justifyContent:'center',alignItems: 'center'}}>
        <Text style={{fontSize: 50, fontWeight: '700'}}>Thành công!</Text>
        <Text style={{fontSize: 17, marginTop: 10}}>Đã đăng ký tài khoản thành công.</Text>
        <Text style={{fontSize: 17}}>Cảm ơn đã lựa chọn ứng dụng!</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{marginTop: 30,backgroundColor: '#DB3022',width: width - 60, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>QUAY LẠI TRANG CHỦ</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
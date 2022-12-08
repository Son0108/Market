import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class SignupSuccess extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
        <Text style={{fontSize: 50, fontWeight: '700'}}>Thành công!</Text>
        <Text style={{fontSize: 17, marginTop: 10}}>Đã đăng kí tài khoản thành công.</Text>
        <Text style={{fontSize: 17}}>Cảm ơn đã lựa chọn ứng dụng!</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={{marginTop: 30,marginLeft: 25,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>BACK TO HOME</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
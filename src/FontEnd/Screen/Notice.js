import { Text, View, SafeAreaView, Image, TextInput } from 'react-native'
import React, { Component } from 'react'

export class Notice extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD'}}>
        <View style={{justifyContent:'center', alignItems:'center',width: '100%', backgroundColor: '#FF6699', height: 140}}>
          <Image style={{width:60, height: 60}} source={require('../assets/Images/logo.png')}/>
          <Text style={{color: '#fff', fontWeight:'bold', fontSize: 25, marginTop: 10}}>THÔNG BÁO</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Notice
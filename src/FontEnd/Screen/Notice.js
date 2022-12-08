import { Text, View, SafeAreaView, Image, TextInput } from 'react-native'
import React, { Component } from 'react'

export class Notice extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
        <View style={{height: '10%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>THÔNG BÁO</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Notice
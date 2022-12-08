import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class DetailOrder extends Component {
  render() {
    const {navigation} = this.props;
    return (
        <SafeAreaView style={{ margin: 20}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{marginTop: 30, marginRight:5,backgroundColor: '#DB3022',width: 178, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>ĐẶT HÀNG</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 30, marginLeft:5,backgroundColor: '#FFF',width: 178, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center', borderWidth: 1, borderColor: '#DB3022'}}>
                    <Text style={{color: '#DB3022', fontSize: 20, fontWeight:'600' }}>HỦY BỎ</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
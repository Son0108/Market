import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window')

export default class Login extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <View  style={{height: height/5,marginTop: 106, marginLeft: 14, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign style={{marginTop: 25}} name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{marginLeft: 10,fontSize: 60, fontWeight: 'bold'}}>Đăng nhập</Text>
        </View>
        <View style={{ height:'40%',justifyContent: 'center', alignItems: 'center'}}>
            <TextInput placeholder='Name' style={{backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4}}></TextInput>
            <TextInput placeholder='Password' style={{backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
            <TouchableOpacity onPress={() => {navigation.navigate('Signup')}} style={{marginTop: 10}}>
                <Text style={{fontSize: 16, marginLeft: 160}}>Bạn chưa có tài khoản?  <AntDesign name="arrowright" size={24} color="#DB3022" /></Text>   
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('App')}} style={{marginBottom: 300, marginLeft: 25,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import UploadAvatar from '../utils/UploadAvatar'

export default class SignUp extends Component {
  render() {
    const {navigation} = this.props;
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
            <View  style={{height: '10%',marginTop: 106, marginLeft: 14}}>
                <Text style={{marginTop: 10,fontSize: 34, fontWeight: 'bold',lineHeight: 34}}>Sign up</Text>
            </View>
            <View style={{ height:'60%',justifyContent: 'center', alignItems: 'center'}}>
                <UploadAvatar/>
                <TextInput placeholder='Email' style={{backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
                <TextInput placeholder='Full name' style={{backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
                <TextInput placeholder='Password' style={{backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
                <TextInput placeholder='Phone' style={{backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
                <TextInput placeholder='Address' style={{backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('SignupSuccess')}} style={{ marginLeft: 25,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>SIGN UP</Text>
            </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
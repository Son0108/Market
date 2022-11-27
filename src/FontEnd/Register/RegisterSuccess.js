import { Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class RegisterSuccess extends Component {
  render() {
    const {navigation} = this.props;
    return (
        <ImageBackground style={{flex: 1,justifyContent: "center",alignItems: 'center'}} source={require('../assets/Images/background.jpg')}>
            <SafeAreaView style={{flex: 1,width: '100%',}}>
                <View style={{width: '100%',justifyContent: 'center',alignItems: 'center',textAlign: 'center'}}>
                    <Image style={{width: 200,height: 200}} source={require('../assets/Images/logo.png')}></Image>
                    <Text style={{color: '#990033', fontSize: 40}}>Thương mại điện tử</Text>
                </View>

                <View style= {{justifyContent: "center",alignItems: 'center', marginTop: 50}}>
                    <Text style = {{color:'#fff', fontWeight:'bold', fontSize: 20}}>Bạn đã đăng ký tài khoản thành công</Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginTop: 50}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{ borderColor: '#AB7082',backgroundColor: '#AB7082',height: 50,width: '63%',borderRadius: 25,justifyContent: 'center',alignItems: 'center',textAlign: 'center',marginBottom: 40}}>
                        <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 20,}}>QUAY VỀ TRANG CHỦ</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({})
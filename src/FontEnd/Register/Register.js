import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native'

export default class Register extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={{flex: 1,justifyContent: "center",alignItems: 'center'}} source={require('../assets/Images/background.jpg')}>
        <SafeAreaView style={{flex: 1,width: '100%',}}>
          
          <View style={{width: '100%',justifyContent: 'center',alignItems: 'center',textAlign: 'center'}}>
            <Image style={{width: 200,height: 200}} source={require('../assets/Images/logo.png')}></Image>
            <Text style={{color: '#990033', fontSize: 40}}>Thương mại điện tử</Text>
          </View>

          <View style={{justifyContent:'center', alignItems:'center', marginTop: 40}}>
            <Text style={{color: '#FF3399', fontSize: 15, fontWeight: 'bold'}}>Tên đăng nhập</Text>
            <View style={{borderWidth: 2,borderColor: '#AB7082',backgroundColor: '#fff', marginTop: 4, borderRadius: 10, padding: 10, width:'70%', height: 50, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <TextInput style={{height:'100%', width:'100%'}}/>
            </View>
            <Text style={{color: '#FF3399', fontSize: 15, fontWeight: 'bold', marginTop: 20}}>Mật khẩu</Text>
            <View style={{borderWidth: 2,borderColor: '#AB7082',backgroundColor: '#fff', marginTop: 4, borderRadius: 10, padding: 10, width:'70%', height: 50, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <TextInput style={{height:'100%', width:'100%'}}/>
            </View>
            <Text style={{color: '#FF3399', fontSize: 15, fontWeight: 'bold', marginTop: 20}}>Xác nhận mật khẩu</Text>
            <View style={{borderWidth: 2,borderColor: '#AB7082',backgroundColor: '#fff', marginTop: 4, borderRadius: 10, padding: 10, width:'70%', height: 50, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <TextInput style={{height:'100%', width:'100%'}}/>
            </View>
          </View>

          <View style={{justifyContent:'center', alignItems:'center', marginTop: 50}}>
          <TouchableOpacity onPress={() => {navigation.navigate('RegisterSuccess')}} style={{ borderColor: '#AB7082',backgroundColor: '#AB7082',height: 50,width: '63%',borderRadius: 25,justifyContent: 'center',alignItems: 'center',textAlign: 'center',marginBottom: 40}}>
              <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 20,}}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{borderWidth: 2 ,borderColor: '#AB7082',backgroundColor: '#fff',height: 50,width: '63%',borderRadius: 25,justifyContent: 'center',alignItems: 'center',textAlign: 'center',marginBottom: 40}}>
              <Text style={{color: '#AB7082',fontWeight: 'bold',fontSize: 20,}}>QUAY LẠI</Text>
          </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({

})
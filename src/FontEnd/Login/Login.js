import { Text, StyleSheet, View, ImageBackground, SafeAreaView, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={{flex: 1,justifyContent: "center",alignItems: 'center'}} source={require('../assets/Images/background.jpg')}>
          <SafeAreaView style={{flex: 1,width: '100%',}}>

              <View style={styles.header}>
                <Image style={{width: 200,height: 200}} source={require('../assets/Images/logo.png')}></Image>
                <Text style={{color: '#990033', fontSize: 40}}>Thương mại điện tử</Text>
              </View>

              <View style={styles.content}>
                <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Tên đăng nhập</Text>
                <View style={{borderWidth: 2,borderColor: '#AB7082',backgroundColor: '#fff', marginTop: 4, borderRadius: 10, padding: 10, width:'70%', height: 50, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Image style={{display: 'flex',height:20, width: 20}} source={require('../assets/Images/user.png')}/>
                    <TextInput
                    style={{height:'100%', width:'90%'}}
                    />
                </View>
                <Text style={{marginTop: 20, color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Mật khẩu</Text>
                <View style={{borderWidth: 2,borderColor: '#AB7082',backgroundColor: '#fff', marginTop: 4, borderRadius: 10, padding: 10, width:'70%', height: 50, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Image style={{display: 'flex',height:20, width: 20}} source={require('../assets/Images/password.png')}/>
                  <TextInput
                  style={{height:'100%', width:'90%'}}
                  />
                </View>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={styles.btnLogin}>
                    <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 20,}}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
              <Text style={{color: '#fff',fontSize: 14}}>Bạn chưa có tài khoản?
                <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                  <Text style={{color: '#fff',fontSize: 14}}>Đăng kí</Text>
                </TouchableOpacity>
              </Text>
              </View>
          </SafeAreaView >
          </ImageBackground>
)}}

const styles = StyleSheet.create({
  header: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
  },
  content: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer : {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
  },
  btnLogin: {
      borderColor: '#AB7082',
      backgroundColor: '#AB7082',
      height: 50,
      width: '63%',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 40
  }});
    

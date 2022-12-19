import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { enviroment } from '../Enviroment/Enviroment';

const {width, height} = Dimensions.get('window')
const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [alert, setAlert] = useState(false);
  const navigation = useNavigation();

  let loginPost = () => {
    const data = {
      email:emailLogin,
      password:passwordLogin
    }
    fetch("http://172.16.103.13:3000/v1/auth/login", {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(data)
    })
    .then(response => {
      if(response.status == 200) {
        navigation.navigate('App')
        setAlert(false);
      } else if (response.status == 500) {
        setAlert(true);
      }
    })
    .catch(e => {
      console.log(e)
    })
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View  style={{height: height/5,marginTop: 80, marginLeft: 14, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <AntDesign style={{marginTop: 25}} name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{marginLeft: 10,fontSize: 60, fontWeight: 'bold'}}>Đăng nhập</Text>
      </View>
      <View style={{marginTop: 20, height:'40%',justifyContent: 'center', alignItems: 'center'}}>
          <TextInput onChangeText={emailInput => setEmailLogin(emailInput)} placeholder='Email' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4}}></TextInput>
          <TextInput onChangeText={passInput => setPasswordLogin(passInput)} placeholder='Password' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
          {alert && <Text style={{color:'red',marginTop: 5}}>Email hoặc mật khẩu không đúng</Text>}
          <TouchableOpacity onPress={() => {navigation.navigate('Signup')}} style={{marginTop: 10}}>
              <Text style={{fontSize: 16, marginLeft: 160}}>Bạn chưa có tài khoản?  <AntDesign name="arrowright" size={24} color="#DB3022" /></Text>   
          </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => loginPost()} style={{marginBottom: 300, marginLeft: 25,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({})
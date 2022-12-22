import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import UploadAvatar from '../utils/UploadAvatar'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../utils/localhost';

const SignUp = () => {
  const [alert, setAlert] = useState(false);
  const [imageForm, setImageForm] = useState(null);
  let formdata = new FormData();
  const [signUp, setSignUp] = useState({
    address:"",
    avatar:"",
    dateOfBirth:"",
    email:"",
    fullname:"",
    password:"",
    phone:""
  })
  const navigation = useNavigation();

  let signUpPost = () => {
    const uri =
    Platform.OS === "android"
      ? imageForm.uri
      : imageForm.uri.replace("file://", "");
    const filename = imageForm.uri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    const type = match ? `image/${match[1]}` : `image`;
    console.log(uri + " " + type + " " + `image.${ext}`)
    formdata.append("address",signUp.address);
    formdata.append("avatar", { uri,
      name: `image.${ext}`,
      type,
    });
    formdata.append("dateOfBirth",signUp.dateOfBirth);
    formdata.append("email",signUp.email);
    formdata.append("fullname",signUp.fullname);
    formdata.append("password",signUp.password);
    formdata.append("phone",signUp.phone);
    formdata.append("status","1");
    formdata.append("type","1");
    fetch(`${API_URL}/auth/register`, {
      method:'POST',
      body:formdata,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      }})
    .then(response => {
        if(response.status == 200) {
          navigation.navigate('SignupSuccess');
          setAlert(false);
        } else if (response.status == 500) {
          setAlert(true);
        }
      }).catch(err => {
        console.log(err)
      }) 
  }
  return (
    <ScrollView style={{ backgroundColor: '#F9F9F9'}}>
    <View  style={{marginTop: 70, marginLeft: 14, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign style={{marginTop: 25}} name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{marginLeft: 10,fontSize: 60, fontWeight: 'bold'}}>Đăng ký</Text>
    </View>
    <View style={{marginTop: 30,justifyContent: 'center', alignItems: 'center'}}>
      <UploadAvatar setImageForm={setImageForm}/>
      <TextInput onChangeText={address => {signUp.address = address}} placeholder='Address' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
      <TextInput onChangeText={dateOfBirth => {signUp.dateOfBirth = dateOfBirth}} placeholder='Date Of Birth yy-mm-dd' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
      <TextInput onChangeText={email => {signUp.email = email}} placeholder='Email' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
      <TextInput onChangeText={fullName => {signUp.fullname = fullName}} placeholder='Full Name' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
      <TextInput onChangeText={pass => {signUp.password = pass}} placeholder='Password' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
      <TextInput onChangeText={phone => {signUp.phone = phone}} placeholder='Phone' style={{paddingLeft: 10,backgroundColor: '#FFFF',width: 360, height: 64,shadowColor:"#000",shadowOffset: {width:1,height: 0}, elevation: 8,borderRadius: 4, marginTop: 10}}></TextInput>
      {alert && <Text style={{color:'red',marginTop: 5}}>Email đã tồn tại hoặc không đúng</Text>}
      <TouchableOpacity onPress={() => signUpPost()} style={{paddingLeft: 10,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center',  marginTop: 30}}>
          <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({})
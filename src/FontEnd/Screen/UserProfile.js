import { SafeAreaView, Text, View, Image , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/localhost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("")
  let [urlImage, setUrlImage] = useState("");

  useEffect(()=> {
    AsyncStorage.getItem('@user').then((value) => {
      setUser(JSON.parse(value));
      setUrlImage(JSON.parse(value).avatar.substr(24,JSON.parse(value).avatar.length - 24))
    })
  },[])

  return (
    <SafeAreaView style={{margin: 20}}>
      <View style= {{ marginTop: 70}}>
        <Text style={{fontSize: 36, fontWeight: '700'}}>My profile</Text>
      </View>
      <View style={{flexDirection:'row', marginTop: 30}}>
      <Image style={{width: 80, height: 80, borderRadius: 50}} source={{uri:`${API_URL}${urlImage}`}} ></Image>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>{user.fullname}</Text>
          <Text style={{color: '#9B9B9B'}}>{user.email}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Order')} style={{flexDirection: 'row', height: 50, marginTop: 40, borderBottomWidth: 1, borderBottomColor:'#9B9B9B'}}>
          <View style={{width:'90%'}}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Giỏ hàng</Text>
            <Text style={{color: '#9B9B9B'}}>Bạn đang có đơn hàng</Text>
          </View>
          <AntDesign name="right" size={20} color="#9B9B9B" />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', height:50, marginTop: 30, borderBottomWidth: 1, borderBottomColor:'#9B9B9B'}}>
          <View style={{width:'90%'}}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Số dư tài khoản</Text>
            <Text style={{color: '#9B9B9B'}}>100000đ</Text>
          </View>
          <AntDesign name="right" size={20} color="#9B9B9B" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingProfile')} style={{flexDirection: 'row', height:50, marginTop: 30}}>
          <View style={{width:'90%'}}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Cài đặt</Text>
            <Text style={{color: '#9B9B9B'}}>Mật khẩu, thông báo</Text>
          </View>
          <AntDesign name="right" size={20} color="#9B9B9B" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{marginTop: 30,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>ĐĂNG XUẤT</Text>
      </TouchableOpacity>
    </SafeAreaView>
)}

export default UserProfile
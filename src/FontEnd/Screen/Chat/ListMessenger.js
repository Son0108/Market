import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { API_URL } from '../../utils/localhost'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListMessenger = ({listMess}) => {
  const [token, setToken] = useState("");
  const navigation = useNavigation()
  const url_image = listMess.avatar.substr(24,listMess.avatar.length - 24)

  useEffect(()=>{
    getToken();
  })
const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@token')
        if (value !== null) {
            setToken(value);
          }
    } catch (e) {
        console.log(e);
    }
}
  return (
    <TouchableOpacity style={{
        backgroundColor: '#fff',
        flex: 1, 
        height: 80,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        flexDirection:'row',
        padding: 10
      }}
      onPress={() => navigation.navigate('Messenger',{
        selectMessage: listMess,
        tokens:token})}
      >
        <View>
          <Image  style={{width: 50, height: 50, borderRadius: 50}} source={{uri:`${API_URL}${url_image}`}} ></Image>
        </View>
        <View style={{width: '80%', marginLeft: 10}}>
          <Text style={{fontSize: 20,height: 40, fontWeight: '500', borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}}>{listMess.fullname}</Text>
          <Text style={{color: '#9B9B9B'}}>{listMess.email}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default ListMessenger
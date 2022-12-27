import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { API_URL } from '../../utils/localhost'

const ListMessenger = ({listMess}) => {
  const navigation = useNavigation()
  const url_image = listMess.avatar.substr(24,listMess.avatar.length - 24)
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
        selectMessage: listMess})}
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
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ListMessenger = ({listMess}) => {
    const navigation = useNavigation()
;  return (
    <TouchableOpacity style={{
        backgroundColor: '#fff',
        flex: 1, 
        height: 70,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10
      }}
      onPress={() => navigation.navigate('Messenger',{
        selectMessage: listMess})}
      >
        <Text style={{fontSize: 20,height: 40, fontWeight: '500', marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}}>{listMess.account}</Text>
        <Text style={{color: '#9B9B9B',marginLeft: 10}}>{listMess.message} </Text>
      </TouchableOpacity>
  )
}

export default ListMessenger
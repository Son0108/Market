import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListMessenger from './Chat/ListMessenger';
import { API_URL } from '../utils/localhost';

const BoxChat = () => {
  const [listChat, setListChat] = useState("");

  useEffect(()=>{
    chatList()
  },[])
  const chatList = async () => {
    AsyncStorage.getItem('@token').then(async tokens => {
      const response = await fetch(`${API_URL}/chat/get-chat-list`,{
        method: 'GET',
        headers: {
          authorization:"Bearer "+tokens.replace(/"/g,'')
        }
      })
      const data = await response.json();
      setListChat(data.payload)
    })
    }

  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
      <View style={{height: '9%', marginTop: 40, marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>CHAT</Text>
      </View>
      <ScrollView>
        {listChat? listChat.map((chat,index) => <ListMessenger key={index} listMess={chat}/>):''}
      </ScrollView>
    </SafeAreaView>
  )
}

export default BoxChat
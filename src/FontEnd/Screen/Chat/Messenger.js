import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../../utils/localhost';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {io} from 'socket.io-client';

const Messenger = ({navigation, route}) => {
    const [token, setToken] = useState("");
    const [listMess, setListMess] = useState("");
    const [valueMess, setValueMess] = useState("");

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
    const socket = io(`http://192.168.31.25:3000`,{
        transports: ['websocket', 'polling', 'flashsocket'],
        extraHeaders: {
        Authorization: "Bearer "+token.replace(/"/g,'')
    }})
    socket.on('connect',()=> {
        console.log(socket.connected);
    })
    useEffect(() => {
        let fetchListMess = async () => {
            AsyncStorage.getItem('@user').then(async value => {
                console.log(JSON.parse(value).id)
            const response = await fetch(`${API_URL}/chat/get-user-messages?` +  new URLSearchParams({
                id:1,
                pageNumber: 1,
                pageSize: 10
            }),{
                method: 'GET',
                headers: {
                authorization:"Bearer "+token.replace(/"/g,'')
            }})
            const data = await response.json();
            console.log(data)
            setListMess(data)
    })}
    fetchListMess();
    },[token])


    let sendMessage = () => {
        socket.emit('sendUserMessage',{
            recipientUserId: `${route.params.selectMessage.id}`,
            content:valueMess,
            type:1
            })
            console.log('send')
            setValueMess("")
    }

  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
        <View style={{height: 90, marginTop: 40, marginBottom: 30, marginLeft:10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{flex: 0.1, marginTop: 25}}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{flex: 0.9,fontSize: 30,  fontWeight: '700', marginTop: 20}}>{route.params.selectMessage.fullname}</Text>
        </View>
        <View style={{flex: 1}}>
            <Text>{route.params.selectMessage.message}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: '5%', marginBottom: 20}}>
            <TextInput value={valueMess} onChangeText={mess => setValueMess(mess)} style={{backgroundColor:'#FFFF', height: 60, width: '86%', borderRadius: 10,padding:10}}></TextInput>
            <TouchableOpacity onPress={() => sendMessage()}>
                <MaterialCommunityIcons style={{marginTop: 15, marginLeft: 15}} name="send" size={30} color="#DB3022" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Messenger

const styles = StyleSheet.create({})
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../../utils/localhost';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {io} from 'socket.io-client';
import { LOCAL } from '../../utils/localhost';
import Mess from './Mess';

const Messenger = ({navigation, route}) => {
    const [listMess, setListMess] = useState("");
    const [send, setSend] = useState(false)
    const [valueMess, setValueMess] = useState("");
    useEffect(() => {
        fetchListMess()
    },[send])
    
    const socket = io(`${LOCAL}`,{
        transports: ['websocket', 'polling', 'flashsocket'],
        extraHeaders: {
        Authorization: "Bearer "+route.params.tokens.replace(/"/g,'')
    }})
    socket.on('connect',()=> {

    })
    let fetchListMess = async () => {
        const response = await fetch(`${API_URL}/chat/get-user-messages?` +  new URLSearchParams({
            id:route.params.selectMessage.id,
            pageNumber: 1,
            pageSize: 10
        }),{
        method: 'GET',
        headers: {
            authorization:"Bearer "+route.params.tokens.replace(/"/g,'')
        }})
        const data = await response.json();
        setListMess(data.payload)
    }

    let sendMessage = () => {
        if(valueMess !== null) {
        socket.emit('sendUserMessage',{
            recipientUserId: `${route.params.selectMessage.id}`,
            content:valueMess,
            type:1
            })
            setValueMess("")
            setSend(!send)
        }
    }
        
  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
        <View style={{height: 90, marginTop: 40, marginBottom: 30, marginLeft:10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{flex: 0.1, marginTop: 25}}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{flex: 0.9,fontSize: 30,  fontWeight: '700', marginTop: 20}}>{route.params.selectMessage.fullname}</Text>
        </View>
        <ScrollView style={{flex: 1}}>
            {listMess? listMess.map((mess,index) => <Mess key={index} contens={mess}/>):''}
        </ScrollView>
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
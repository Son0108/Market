import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import Messenger from './Chat/Messenger';
import ListMessenger from './Chat/ListMessenger';

const messages = [{
  id: 1,
  account: 'admin',
  message: 'hello cậu',
},
{
  id: 2,
  account: 'bella',
  message: 'hello cậu',
},
{
  id: 3,
  account: 'giám đốc',
  message: 'hello bạn',
},
{
  id: 4,
  account: 'giám đốc',
  message: 'hello cậu',
}]

const BoxChat = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
      <View style={{height: '9%', marginTop: 40, marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>CHAT</Text>
      </View>

      <FlatList
        data = {messages}
        numColumns={1}
        renderItem={({item}) => <ListMessenger listMess={item}/>}
        keyExtractor={item => item.id}
      >
      </FlatList>
    </SafeAreaView>
  )
}

export default BoxChat
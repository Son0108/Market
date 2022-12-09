import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Messenger from './Chat/Messenger';

export class BoxChat extends Component {

  messages = [{
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
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
        <View style={{height: '9%', marginTop: 40, marginBottom: 30, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>CHAT</Text>
        </View>

        <FlatList
          data = {this.messages}
          numColumns={1}
          renderItem={({item}) => <TouchableOpacity style={{
            backgroundColor: '#fff',
            flex: 1, 
            height: 70,
            marginBottom: 10,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 10
          }}
          key={item.id}
          onPress={() => navigation.navigate('Messenger')}
          >
            <Text style={{fontSize: 20,height: 40, fontWeight: '500', marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}}>{item.account}</Text>
            <Text style={{color: '#9B9B9B',marginLeft: 10}}>{item.message} </Text>
          </TouchableOpacity>}
        >
        </FlatList>
        {/* <Messenger account={}/> */}
      </SafeAreaView>
    )
  }
}

export default BoxChat
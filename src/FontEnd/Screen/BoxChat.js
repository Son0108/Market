import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export class BoxChat extends Component {
  messages = [{
    account: 'admin',
    message: 'hello cưng',
  },
  {
    account: 'bella',
    message: 'hello cưng',
  },
  {
    account: 'giám đốc',
    message: 'hello cưng',
  },
  {
    account: 'giám đốc',
    message: 'hello cưng',
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
          onPress={() => navigation.navigate('Messenger')}
          >
            <Text style={{fontSize: 20,height: 40, fontWeight: '500', marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#9B9B9B'}}>{item.account}</Text>
            <Text style={{color: '#9B9B9B',marginLeft: 10}}>{item.message} </Text>
          </TouchableOpacity>}
        ></FlatList>
      </SafeAreaView>
    )
  }
}

export default BoxChat
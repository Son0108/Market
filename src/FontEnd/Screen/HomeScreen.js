import { Image, SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';

export class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View style={{justifyContent:'center', alignItems:'center',width: '100%', backgroundColor: '#FF6699', height: 120}}>
          <Image style={{width:60, height: 60}} source={require('../assets/Images/logo.png')}/>
          <View style={{borderBottomWidth: 1, width:'80%', height: 50, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Image style={{display: 'flex',height:30, width: 30}} source={require('../assets/Images/search.png')}/>
            <TextInput style={{ marginLeft: -30, width:'90%', borderRadius:6}}></TextInput>
          </View>
        </View>
        <View>
          <Text>test</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
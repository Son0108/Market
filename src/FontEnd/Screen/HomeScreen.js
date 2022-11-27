import { Image, SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'

export class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Image style={{width:50, height: 50}} source={require('../assets/Images/logo.png')}/>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
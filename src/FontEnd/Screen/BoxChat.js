import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class BoxChat extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>BoxChat</Text>
      </View>
    )
  }
}

export default BoxChat
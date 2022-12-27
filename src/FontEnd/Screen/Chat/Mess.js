import { View, Text } from 'react-native'
import React from 'react'

const Mess = ({contens}) => {
  return (
    <View style={{padding:10,marginLeft: 10,height: 40,width:'95%', backgroundColor: '#33CCFF',marginTop:10, borderRadius:10}}>
      <Text style={{color:'#FFF'}}>{contens.content}</Text>
    </View>
  )
}

export default Mess
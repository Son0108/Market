import { SafeAreaView, Text, View, Image , StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export class UserProfile extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
        <View style={{width: '100%', backgroundColor: '#FF6699', height: 140}}>
          <View style={{justifyContent:'center', alignItems:'center', marginTop: 10}}>
            <Image style={{width:60, height: 60}} source={require('../assets/Images/logo.png')}/>
          </View>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <View style= {{width: '85%', flexDirection:'row'}}>
              <Image style={{width: 60, height: 60, borderRadius: 40}} source={require('../assets/Avarta/avarta.jpg')}></Image>
              <Text style={{padding: 15, fontSize: 20, color: '#fff'}}>Admin</Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Chat')}}>
              <Image style={{width: 30, height: 30}} source={require('../assets/Images/message.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.list}>
          <TouchableOpacity style={styles.wrapper} >
            <Image style={styles.image} source={require('../assets/Profile/bill.png')}></Image>
            <Text style={styles.text}>Đơn Mua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper} >
            <Text style={styles.text}>Số dư TK</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={{justifyContent: 'center',padding: 5,marginTop:10,height: 50,width: '97%',backgroundColor: '#FF6699',borderWidth: 1,borderColor: '#FF6699',borderRadius: 5,flexDirection: 'row'}} >
            <Text style={styles.text}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    justifyContent: 'center',
    padding: 5,
    marginTop:10,
    height: 50,
    width: '97%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6699',
    borderRadius: 5,
    flexDirection: 'row'
  },
  text: {
    fontSize: 15,
    padding: 5
  },
  image: {
    height: 30,
    width: 30
  }
})
export default UserProfile
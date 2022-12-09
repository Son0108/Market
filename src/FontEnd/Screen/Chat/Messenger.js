import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Messenger extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id:props.id,
            name:props.account,
        }
    }
    render() {
      console.log(this.props);
    const {navigation} = this.props;
    return (
        <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
            <View style={{height: 110, marginTop: 40, marginBottom: 30, marginLeft:10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{flex: 0.1, marginTop: 25}}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{flex: 0.9,fontSize: 40,  fontWeight: '700', marginTop: 20, marginLeft: 120}}>CHAT</Text>
            </View>
            <View style={{flex: 1}}>
                <Text>hello</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: '5%', marginBottom: 20}}>
                <TextInput style={{backgroundColor:'#FFFF', height: 60, width: '86%', borderRadius: 10}}></TextInput>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={{marginTop: 15, marginLeft: 15}} name="send" size={30} color="#DB3022" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
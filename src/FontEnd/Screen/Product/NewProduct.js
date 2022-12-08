import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native'
import React, { Component, useState } from 'react'
import UploadImage from '../../utils/UploadImage'


export class NewProduct extends Component { 
    render() {
    const {navigation} = this.props;
    return (
        <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
            <View style={{height: '10%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>THÊM SẢN PHẨM</Text>
            </View>

            <View style={{alignItems:'center', marginTop: 20}}>
                <UploadImage/>
                <Text style={styles.text}>Nhập tên sản phẩm</Text>
                <TextInput placeholder='Vui lòng nhâp tên sản phẩm' style={{ height:40,width:'90%',borderWidth:1,borderRadius:6, marginTop: 10}}></TextInput>
                <Text style={styles.text}>Nhập giá tiền của sản phẩm</Text>
                <TextInput placeholder='Nhập giá tiền' style={{  height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 10}}></TextInput>
                <Text style={styles.text}>Mô tả sản phẩm</Text>
                <TextInput placeholder='Nhập mô tả' style={{ height:60, width:'90%',borderWidth:1, borderRadius:6, marginTop: 10, marginBottom: 20}}></TextInput>
            </View>
            <TouchableOpacity  style={{ marginLeft: 25,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>THÊM SẢN PHẨM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 20, marginLeft: 25,backgroundColor: '#FFFF',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center', borderWidth: 1, borderColor:'#DB3022'}}>
                <Text style={{color: '#DB3022', fontSize: 20, fontWeight:'600' }}>HỦY BỎ</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontWeight: 'bold'
    }
})

export default NewProduct
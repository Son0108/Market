import { SafeAreaView, ScrollView, Text, View, Image, TextInput, Button, StyleSheet } from 'react-native'
import React, { Component, useState } from 'react'
import UploadImage from '../../utils/UploadImage'


export class NewProduct extends Component { 
    render() {

    return (
        <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
            <View style={{justifyContent:'center', alignItems:'center',width: '100%', backgroundColor: '#FF6699', height: 140}}>
                <Image style={{width:60, height: 60}} source={require('../../assets/Images/logo.png')}/>
                <Text style={{color: '#fff', fontWeight:'bold', fontSize: 25, marginTop: 10}}>Thêm sản phẩm mới</Text>
            </View>

            <View style={{alignItems:'center', marginTop: 20}}>
                <UploadImage/>
                <Text style={styles.text}>Nhập tên sản phẩm</Text>
                <TextInput placeholder='Vui lòng nhâp tên sản phẩm' style={{ height:40,width:'90%',borderWidth:1,borderRadius:6, marginTop: 10}}></TextInput>
                <Text style={styles.text}>Nhập giá tiền của sản phẩm</Text>
                <TextInput placeholder='Nhập giá tiền' style={{  height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 10}}></TextInput>
                <Text style={styles.text}>Mô tả sản phẩm</Text>
                <TextInput placeholder='Nhập mô tả' style={{ height:60, width:'90%',borderWidth:1, borderRadius:6, marginTop: 10, marginBottom: 20}}></TextInput>
                <Button color='#FF6699' title='Thêm sản phẩm'></Button>
            </View>
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
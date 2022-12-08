import { SafeAreaView, ScrollView, Text, View, Image, TextInput, Button } from 'react-native'
import React, { Component, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

export class NewProduct extends Component { 
    render() {
      const [image, setImage] = useState();
    const pickImage = async () => {
        // let result = await ImagePicker.launchImageLibraryAsync({
        // mediaTypes: ImagePicker.MediaTypeOptions.All,
        // allowsEditing: true,
        // aspect: [4, 3],
        // quality: 1,
        // });

        // if (!result.canceled) {
        // setImage(result.assets[0].uri);
        // }
    };
    return (
        <SafeAreaView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
            <View style={{justifyContent:'center', alignItems:'center',width: '100%', backgroundColor: '#FF6699', height: 140}}>
                <Image style={{width:60, height: 60}} source={require('../../assets/Images/logo.png')}/>
                <Text style={{color: '#fff', fontWeight:'bold', fontSize: 25, marginTop: 10}}>Thêm sản phẩm mới</Text>
            </View>

            <View style={{alignItems:'center'}}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <Text>Nhập tên sản phẩm</Text>
                <TextInput placeholder='Vui lòng nhâp tên sản phẩm' style={{ height:40,width:'90%',borderWidth:1,borderRadius:6, marginTop: 10}}></TextInput>
                <Text>Nhập giá tiền của sản phẩm</Text>
                <TextInput placeholder='Nhập giá tiền' style={{  height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 10}}></TextInput>
                <Text>Mô tả sản phẩm</Text>
                <TextInput placeholder='Nhập mô tả' style={{ height:60, width:'90%',borderWidth:1, borderRadius:6, marginTop: 10}}></TextInput>
                <Button color='#FF6699' title='Thêm sản phẩm'></Button>
            </View>
        </SafeAreaView>
    )
  }
}

export default NewProduct
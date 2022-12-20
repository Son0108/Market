import { ScrollView, Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import UploadImage from '../../utils/UploadImage'
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SelectList } from 'react-native-dropdown-select-list';

const NewProduct = ({navigation}) => {
    const {height,width} = Dimensions.get('window')
    const [categories, setCategories] = useState("");
    const [selected, setSelected] = useState("");
    useEffect(() => {
    const fetchData = async () => {
        AsyncStorage.getItem('@token').then(async tokens => {
        const response = await fetch('http://192.168.31.25:3000/v1/category/get-all',{
            method: 'GET',
            headers: {
            authorization:"Bearer "+tokens.replace(/"/g,'')
            }
        })
        const data = await response.json();
        setCategories(data)
        })
    }
    fetchData();
    },[])
    const [item, setItem] = useState({
        description:"",
        name:"",
        price:"",
        quantity:""
      })
      const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]
    return (
        <ScrollView >
            <View style={{height: height,backgroundColor: '#DDDDDD'}}>
                <View style={{ marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize: 40,  fontWeight: '700', marginTop: 20}}>THÊM SẢN PHẨM</Text>
                </View>

                <View style={{alignItems:'center', marginTop: 20}}>
                    <UploadImage/>
                    <Text style={styles.text}>Nhập tên sản phẩm</Text>
                    <TextInput onChangeText={name => {item.name = name}} placeholder='Vui lòng nhâp tên sản phẩm' style={{ paddingLeft: 10,height:40,width:'90%',borderWidth:1,borderRadius:6, marginTop: 10, backgroundColor: '#FFFF'}}></TextInput>
                    <Text style={styles.text}>Nhập giá tiền của sản phẩm</Text>
                    <TextInput onChangeText={price => {item.price = price}} placeholder='Nhập giá tiền' style={{ paddingLeft: 10, height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 10,backgroundColor: '#FFFF'}}></TextInput>
                    <Text style={styles.text}>Nhập số lượng sản phẩm</Text>
                    <TextInput onChangeText={quantity => {item.quantity = quantity}} placeholder='Nhập số lượng' style={{ paddingLeft: 10, height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 10,backgroundColor: '#FFFF'}}></TextInput>
                    <Text style={styles.text}>Thể loại sản phẩm</Text>
                    <SelectList setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"/>
                    <Text style={styles.text}>Mô tả sản phẩm</Text>
                    <TextInput  onChangeText={description => {item.description = description}} placeholder='Nhập mô tả' style={{paddingLeft: 10, height:60, width:'90%',borderWidth:1, borderRadius:6, marginTop: 10, marginBottom: 20,backgroundColor: '#FFFF'}}></TextInput>
                </View>
                <TouchableOpacity  style={{ marginLeft: 25,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>THÊM SẢN PHẨM</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 20, marginLeft: 25,backgroundColor: '#FFFF',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center', borderWidth: 1, borderColor:'#DB3022'}}>
                    <Text style={{color: '#DB3022', fontSize: 20, fontWeight:'600' }}>HỦY BỎ</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontWeight: 'bold'
    }
})


export default NewProduct
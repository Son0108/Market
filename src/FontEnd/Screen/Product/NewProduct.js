import { ScrollView, Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import UploadImage from '../../utils/UploadImage'
import { API_URL } from '../../utils/localhost'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SelectDropdown from 'react-native-select-dropdown'

const NewProduct = ({navigation,route}) => {
    const {height,width} = Dimensions.get('window');
    const [imageForm, setImageForm] = useState(null);
    const [categories, setCategories] = useState("");
    let formdata = new FormData();
    const [item, setItem] = useState({
        categoryIds:"",
        description:"",
        name:"",
        price:"",
        quantity:""
      })
    useEffect(() => {
        const fetchData = async () => {
            AsyncStorage.getItem('@token').then(async tokens => {
            const response = await fetch(`${API_URL}/category/get-all`,{
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
    
    let createItem = () => {
        const uri =
        Platform.OS === "android"
        ? imageForm.uri
        : imageForm.uri.replace("file://", "");
        const filename = imageForm.uri.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const ext = match?.[1];
        const type = match ? `image/${match[1]}` : `image`;
        console.log(uri + " " + type + " " + `image.${ext}`)
        formdata.append("categoryIds",item.categoryIds);
        formdata.append("description",item.description);
        formdata.append("images", { uri,
        name: `image.${ext}`,
        type,
        });
        formdata.append("name",item.name);
        formdata.append("price",item.price);
        formdata.append("quantity",item.quantity);
        formdata.append("status","1");
        formdata.append("type","1");
        AsyncStorage.getItem('@token').then(async tokens => {
            fetch(`${API_URL}/item/create`, {
                method:'POST',
                body:formdata,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    authorization:"Bearer "+tokens.replace(/"/g,'')
            }})
            .then(response => {
                if(response.status == 200) {
                    navigation.goBack();
                    route.params.setAddNew(!route.params.addNew)
                } else if (
                    response.status == 500) {
                }
            }).catch(err => {
                console.log(err)
        })})
    }

    return (
        <ScrollView >
            <View style={{height: height,backgroundColor: '#DDDDDD'}}>
                <View style={{ marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize: 30,  fontWeight: '700', marginTop: 20}}>THÊM SẢN PHẨM</Text>
                </View>

                <View style={{alignItems:'center', marginTop: 20}}>
                    <UploadImage setImageForm={setImageForm}/>
                    <Text style={styles.text}>Nhập tên sản phẩm</Text>
                    <TextInput onChangeText={name => {item.name = name}} placeholder='Vui lòng nhâp tên sản phẩm' style={{ paddingLeft: 10,height:40,width:'90%',borderWidth:1,borderRadius:6, marginTop: 5, backgroundColor: '#FFFF'}}></TextInput>
                    <Text style={styles.text}>Nhập giá tiền của sản phẩm</Text>
                    <TextInput onChangeText={price => {item.price = price}} placeholder='Nhập giá tiền' style={{ paddingLeft: 10, height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 5,backgroundColor: '#FFFF'}}></TextInput>
                    <Text style={styles.text}>Nhập số lượng sản phẩm</Text>
                    <TextInput onChangeText={quantity => {item.quantity = quantity}} placeholder='Nhập số lượng' style={{ paddingLeft: 10, height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 5,backgroundColor: '#FFFF'}}></TextInput>
                    <Text style={styles.text}>Thể loại sản phẩm</Text>
                    <SelectDropdown
                        buttonStyle={{backgroundColor: '#FFFF', height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 5}}
                        defaultButtonText="Chọn thể loại sản phẩm"
                        data={categories.payload}
                        onSelect={(selectedItem, index) => {
                            item.categoryIds = selectedItem.id
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.name
                        }}
                        rowTextForSelection={(item, index) => {
                            return item.name
                        }}
                    />
                    <Text style={styles.text}>Mô tả sản phẩm</Text>
                    <TextInput  onChangeText={description => {item.description = description}} placeholder='Nhập mô tả' style={{paddingLeft: 10, height:60, width:'90%',borderWidth:1, borderRadius:6, marginTop: 5, marginBottom: 20,backgroundColor: '#FFFF'}}></TextInput>
                </View>
                <TouchableOpacity onPress={()=> createItem()} style={{ marginLeft: 25,backgroundColor: '#DB3022',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
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
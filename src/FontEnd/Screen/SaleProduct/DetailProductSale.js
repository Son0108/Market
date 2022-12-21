import { ScrollView, Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../utils/localhost';
import UploadImage from '../../utils/UploadImage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';


const {height, width} = Dimensions.get('window')

const DetailProductSale = ({navigation,route}) => {
    const [itemDetail, setItemDetail] = useState("");
    const [imageForm, setImageForm] = useState(null);
    const [categories, setCategories] = useState("");
    const [categorie, setCategorie] = useState("");
    const [prices, setPrices] = useState("");
    const [quantitys, setQuantitys] = useState("");
    const [categorieIds, setCategorieIds] = useState([]);
    const [urlImage, setUrlImage] = useState("");
    const [removeImageIds, setRemoveImageIds]= useState([]);
    let formdata = new FormData();
    const [item, setItem] = useState({
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
    useEffect(() => {
        const fetchData = async () => {
            AsyncStorage.getItem('@token').then(async tokens => {
            const response = await fetch(`${API_URL}/item/get-item-detail?` +  new URLSearchParams({
                id: route.params.id
            }),{
                method: 'GET',
                headers: {
                authorization:"Bearer "+tokens.replace(/"/g,'')
                }
            })
            const data = await response.json();
            if (response.status == 200) {
                setItemDetail(data.payload)
                setPrices(String(data.payload.price))
                setQuantitys(String(data.payload.quantity))
                setUrlImage(data.payload.images[0].url.substr(24,data.payload.images[0].url.length - 24))
                setRemoveImageIds(data.payload.images[0].id);
                setCategorie(data.payload.categories[0].name)
                item.description = data.payload.description;
                item.name = data.payload.name;
                item.price = data.payload.price;
                item.quantity = data.payload.quantity;
                setCategorieIds([data.payload.categories[0].id])
            }})
        }
        fetchData();
    },[])

    let modifyItem = () => {
        if (imageForm !==null) {
            const uri =
            Platform.OS === "android"
                ? imageForm.uri
                : imageForm.uri.replace("file://", "");
            const filename = imageForm.uri.split("/").pop();
            const match = /\.(\w+)$/.exec(filename);
            const ext = match?.[1];
            const type = match ? `image/${match[1]}` : `image`;
            formdata.append("categoryIds",JSON.stringify(categorieIds));
            formdata.append("description",item.description);
            formdata.append("images", { uri,
                name: `image.${ext}`,
                type,
            });
            formdata.append("name",item.name);
            formdata.append("price",item.price);
            formdata.append("quantity",item.quantity);
            formdata.append("removeImageIds",removeImageIds)
        } else {
            formdata.append("categoryIds",JSON.stringify(categorieIds));
            formdata.append("description",item.description);
            formdata.append("images","");
            formdata.append("name",item.name);
            formdata.append("price",item.price);
            formdata.append("quantity",item.quantity);
            formdata.append("removeImageIds",[0])
        }
        formdata.append("status","1");
        formdata.append("type","1");
        console.log(formdata)
        AsyncStorage.getItem('@token').then(async tokens => {
            fetch(`${API_URL}/item/edit?`+ new URLSearchParams({
                id: route.params.id
            }), {
                method:'PATCH',
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
                } else if (response.status == 500) {
                    console.log("NOK")
                }
            }).catch(err => {
                console.log(err)
        })})
    }

    let deleteItem = () => {
        AsyncStorage.getItem('@token').then(async tokens => {
            fetch(`${API_URL}/item/delete?`+ new URLSearchParams({
                id: route.params.id
            }), {
                method:'DELETE',
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    authorization:"Bearer "+tokens.replace(/"/g,'')
            }})
            .then(response => {
                if(response.status == 200) {
                    navigation.goBack();
                    route.params.setAddNew(!route.params.addNew)
                } else if (response.status == 500) {
                    console.log("NOK")
                }
            }).catch(err => {
                console.log(err)
        })})
    }
  return (
    <ScrollView style={{height: height,backgroundColor: '#DDDDDD'}}>
        <View style={{ marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#9B9B9B', justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize: 30,  fontWeight: '700', marginTop: 20}}>CHI TIẾT SẢN PHẨM</Text>
        </View>

        <View style={{alignItems:'center', marginTop: 20}}>
            <View style={{marginLeft:60,flexDirection:'row'}}>
                <View style={{marginRight: 5}}>
                    <Text>Ảnh mới</Text>
                    <UploadImage setImageForm={setImageForm}/>
                </View>
                <View style={{marginLeft: 5}}>
                    <Text>Ảnh cũ</Text>
                    <Image style={{ width: 50, height: 50}} source={{uri:`${API_URL}${urlImage}`}}/>
                </View>
            </View>
            <Text style={styles.text}>Tên sản phẩm</Text>
            <TextInput onChangeText={name => {item.name = name}} defaultValue={itemDetail.name} placeholder='Vui lòng nhâp tên sản phẩm' style={{ paddingLeft: 10,height:40,width:'90%',borderWidth:1,borderRadius:6, marginTop: 5, backgroundColor: '#FFFF'}}></TextInput>
            <Text style={styles.text}>Giá tiền của sản phẩm</Text>
            <TextInput onChangeText={price => {item.price = price}} defaultValue={prices} placeholder='Nhập giá tiền' style={{ paddingLeft: 10, height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 5,backgroundColor: '#FFFF'}}></TextInput>
            <Text style={styles.text}>Số lượng sản phẩm</Text>
            <TextInput onChangeText={quantity => {item.quantity = quantity}} defaultValue={quantitys} placeholder='Nhập số lượng' style={{ paddingLeft: 10, height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 5,backgroundColor: '#FFFF'}}></TextInput>
            <Text style={styles.text}>Thể loại sản phẩm</Text>
            <SelectDropdown
                buttonStyle={{backgroundColor: '#FFFF', height:40,width:'90%',borderWidth:1, borderRadius:6, marginTop: 5}}
                data={categories.payload}
                defaultButtonText={categorie}
                onSelect={(selectedItem, index) => {
                    setCategorieIds([selectedItem.id])
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.name
                }}
                rowTextForSelection={(item, index) => {
                    return item.name
                }}
            />
            <Text style={styles.text}>Mô tả sản phẩm</Text>
            <TextInput onChangeText={description => {item.description = description}} defaultValue={itemDetail.description} placeholder='Nhập mô tả' style={{paddingLeft: 10, height:60, width:'90%',borderWidth:1, borderRadius:6, marginTop: 5, marginBottom: 20,backgroundColor: '#FFFF'}}></TextInput>
        </View>
        <View style={{ flexDirection:'row',marginLeft: 25,width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=> modifyItem()} style={{ marginRight: 10,backgroundColor: '#FFF',width: 160, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center',borderWidth: 1, borderColor:'#DB3022'}}>
                <Text style={{color: '#DB3022', fontSize: 20, fontWeight:'600' }}>LƯU</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem()} style={{marginLeft: 10,backgroundColor: '#DB3022',width: 160, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center', borderWidth: 1, borderColor:'#DB3022'}}>
                <Text style={{color: '#FFF', fontSize: 20, fontWeight:'600' }}>XÓA</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 20, marginLeft: 25,backgroundColor: '#FFFF',width: 360, height:48, borderRadius: 25, justifyContent:'center', alignItems: 'center', borderWidth: 1, borderColor:'#DB3022'}}>
            <Text style={{color: '#DB3022', fontSize: 20, fontWeight:'600' }}>HỦY BỎ</Text>
        </TouchableOpacity>
</ScrollView>
  )
}
const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontWeight: 'bold'
    }
})


export default DetailProductSale
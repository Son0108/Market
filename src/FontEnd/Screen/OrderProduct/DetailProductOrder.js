import { Text, TouchableOpacity, Image, StyleSheet, View, Dimensions, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../../utils/localhost';
import AsyncStorage from '@react-native-async-storage/async-storage';

var {height, width} = Dimensions.get('window');
const DetailProductOrder = ({navigation, route}) => {
    let [count, setCount] = useState(1);
    let url_image = route.params.item.imageURL.substr(24,route.params.item.imageURL.length - 24)

    let addCart = () => {
      const arrayItem={items:[]}
      const item = {
        id:route.params.item.id,
        quantity:count
      }
      arrayItem.items.push(item)
      AsyncStorage.getItem('@token').then(async tokens => {
          fetch(`${API_URL}/cart/create`,{
            method:'POST',
            body:JSON.stringify(arrayItem),
            headers: {
              'Content-Type': 'application/json',
              authorization:"Bearer "+tokens.replace(/"/g,'')
            }})
          .then(response => {
              if(response.status == 200) {
                setTimeout(() => {
                  Alert.alert("Thành công");
                }, 1000);
                navigation.goBack();
              } else if (response.status == 500) {
                setTimeout(() => {
                  Alert.alert("Thất bại");
                }, 1000);
              }
          }).catch(err => {
              console.log(err)
      })})
  }
  return (
    <ScrollView style={{height:height}}>
        <Image style={styles.imageView} resizeMode="contain" source={{uri:`${API_URL}${url_image}`}}/>
        <View style={{padding: 10}}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:28,color:"green"}}>{route.params.item.price}đ</Text>
            <Text style={{fontSize:16,color:"red",alignSelf: 'flex-end'}}>Số lượng còn lại: {route.params.item.quantity}</Text>
          </View>
          <Text  style={{fontSize:40}}>{route.params.item.name}</Text>
          <Text style={{color:"#DB3022"}}>Thể loại : <Text style={{color:"black"}}>{route.params.item.categories[0].name}</Text></Text>
          <Text style={{fontSize:15}}>{route.params.item.description}</Text>
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20,alignItems: 'center', justifyContent:'center'}}>
            <TouchableOpacity onPressIn={() => {
                if(count <= 1) {
                  setCount(1)
                } else {
                  setCount(count-1)
                }}}>
              <AntDesign name="minuscircleo" size={30} color="#DB3022" />
            </TouchableOpacity>
            <Text style={{width: width/2, height: 35, backgroundColor:'#DDDDDD', fontSize:20, padding: 5, marginLeft: 5, marginRight: 5, borderRadius: 10, textAlign: 'center'}}>{count}</Text>
            <TouchableOpacity onPressIn={() => {
                if(count >= route.params.item.quantity) {
                  setCount(route.params.item.quantity)
                } else {
                  setCount(count+1)
                }}}>
              <AntDesign name="pluscircleo" size={30} color="#DB3022" />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => addCart()}>
                  <View style={styles.buttonAdd}>
                      <Text style={{ fontWeight: 'bold',color:'#DB3022'}}>Thêm vào giỏ hàng</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.buttonClose}>
                      <Text style={{fontWeight: 'bold',color:'white'}}>Đóng</Text>
                  </View>
              </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
  buttonClose: {
    width:(width-20)/2 - 10,
    backgroundColor: '#DB3022',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#DB3022',
    marginLeft: 10
  },
  buttonAdd: {
    width:(width-20)/2 - 10,
    backgroundColor: '#FFFF',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#DB3022',
    marginRight: 10
  },
  bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
  },
  imageView : {
      width: width,
      height: (width/4)*3
  }
})

export default DetailProductOrder
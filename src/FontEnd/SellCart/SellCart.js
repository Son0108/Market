import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import {status} from '../utils/status'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../utils/localhost'
import ItemSell from './ItemSell'

const {height, width} = Dimensions.get('window')
const SellCart = ({cart,editCart, setEditCart}) => {
    var filtered = status.filter(state => state.id == cart.status)
    const navigation = useNavigation();
    const [showEdit, setShowEdit] = useState(false);
    const [state, setState] = useState("")

    let editStatus = () => {
        console.log(cart.id + " " + state)
        AsyncStorage.getItem('@token').then(async tokens => {
            fetch(`${API_URL}/cart/seller-change-status?`+ new URLSearchParams({
                id: cart.id,
                status: state
            }), 
            {
            method:'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization:"Bearer "+tokens.replace(/"/g,'')
            }})
            .then(response => {
                if(response.status == 200) {
                    console.log("OK");
                    setShowEdit(false);
                    setEditCart(!editCart);
                } else if (response.status == 500) {
                    console.log("NOK")
                }
            }).catch(err => {
                console.log(err)
    })})}

    let cancel = () => {
        setShowEdit(false);
    }

    return (
        <View style={{backgroundColor:'#FFFF', borderRadius:10, padding: 20, marginBottom: 10}}>
            <Text style={{fontSize: 20, fontWeight:'500'}}>{cart.buyerUser.fullname}</Text>
            <View style={{borderBottomWidth: 1, flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={{color:'#BBBBBB',fontSize: 14}}>{cart.buyerUser.email}</Text>
                <TouchableOpacity onPress={() => setShowEdit(!showEdit)}>
                    <Text style={{color:'#BBBBBB',fontSize: 14}}>Sửa</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: width-150}}>
                {cart.items.map((item,index) => 
                    <ItemSell item={item} filtered={filtered}/>
                )}
                <Text style={{color:'red'}}>Tổng tiền : {cart.amount}đ</Text>
            </View>
            {showEdit?
            <View>
                <SelectDropdown
                    buttonStyle={{backgroundColor: '#FFFF', height:30,width: width -40,borderWidth:0.5, marginTop: 5}}
                    defaultButtonText={filtered[0].value}
                    buttonTextStyle={{color: '#F4A460', fontSize:13}}
                    rowTextStyle={{color: '#F4A460', fontSize:13}}
                    data={status}
                    onSelect={(selectedItem, index) => {
                        setState(selectedItem.id)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.value
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.value
                    }}
                ></SelectDropdown>
                <TouchableOpacity onPress={() => editStatus()} style={{backgroundColor: '#DB3022',marginTop: 5,justifyContent:'center', alignItems:'center', height:30}}>
                    <Text style={{color:'#FFF', fontWeight:'500'}}>LƯU</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => cancel()} style={{borderColor: '#DB3022',borderWidth:1,marginTop: 5, justifyContent:'center', alignItems:'center',  height:30}}>
                    <Text style={{color:'#DB3022', fontWeight:'500'}}>HỦY</Text>
                </TouchableOpacity>
            </View>:''}
        </View>
    )
}

export default SellCart
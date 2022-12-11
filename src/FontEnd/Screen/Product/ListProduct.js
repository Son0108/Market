import { Text, TouchableOpacity, Image, StyleSheet, Dimensions, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

var {height, width} = Dimensions.get('window');
const ListProduct = ({item, handle, setHandle}) => {
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity
            onPress={() => setHandle(true)}
            style={styles.divProduct}>
            <Image
            style={styles.imageProduct}
            resizeMode="contain"
            source={item.image} />
            <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
            <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>
                {item.name}
            </Text>
            <Text style={{fontSize:14,color:"green"}}>{item.price}đ <Text style={{fontSize:14,color:"red"}}>-{item.sale}</Text></Text>
        </TouchableOpacity>
        <Modal
            isVisible={handle}    
            style={styles.bottomModal}
            animationIn="slideInUp">
            <View style={styles.modalContent}>
                <Image style={styles.imageView} resizeMode="contain" source={item.image}/>
                <Text  style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>{item.name}</Text>
                <Text style={{fontSize:14,color:"green"}}>{item.price}đ <Text style={{fontSize:14,color:"red"}}>-{item.sale}</Text></Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <View style={styles.buttonAdd}>
                            <Text style={{ fontWeight: 'bold',color:'#DB3022'}}>Thêm vào giỏ hàng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHandle(false)}>
                        <View style={styles.buttonClose}>
                            <Text style={{fontWeight: 'bold',color:'white'}}>Đóng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    imageProduct:{
        width:((width/2)-20)-10,
        height:((width/2)-20)-30,
        backgroundColor:'transparent',
        position:'absolute',
        top:-45
    },
    imageView : {
        width: (width/2),
        height:(width/2), 
    }
    ,
    divProduct:{
        width:(width/2)-20,
        padding:10,
        borderRadius:10,
        marginTop:55,
        marginBottom:5,
        marginLeft:10,
        alignItems:'center',
        elevation:8,
        shadowOpacity:0.3,
        shadowRadius:50,
        backgroundColor:'white',
    },
    buttonClose: {
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
    modalContent: {
        height: height,
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
})

export default ListProduct
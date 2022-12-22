import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { API_URL } from './localhost';

const Categories = ({props}) => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator= {false}
    >
        {props ? props.map((item,index) => 
            <TouchableOpacity key={index} onPress={() => console.log(item.id)} style={{ backgroundColor: '#FFFF', borderRadius: 5, padding: 10, marginTop: 10, marginRight: 5, marginLeft: 5}}>
                <Text style={{fontSize: 14}}>{item.name}</Text>
            </TouchableOpacity>
        ): ''}
    </ScrollView>
  )
}

export default Categories
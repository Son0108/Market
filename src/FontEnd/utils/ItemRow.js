import { View, Text,ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Item from './Item'

const ItemRow = ({props}) => {
  return (
    <View style={styles.container}>
      {props ? props.map((item,index) => 
            <Item props={item}/>
        ): ''}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
})

export default ItemRow
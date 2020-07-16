import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function TodoItem({ item , DeleteItem}) {
    return (
        <TouchableOpacity onPress={ () => DeleteItem(item.key)}>
            <Text style={styles.item}> {item.text} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10
    }
});
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


function BoxText(props) {

    const { title, index, containerStyle, textStyle } = props

    return (
        <View style={{...styles.container, ...containerStyle}} key={index}>
            <Text style={{...styles.text, ...textStyle}}>
                {title}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6ff',
        borderRadius: 5,
        paddingVertical: 13,
        paddingHorizontal: 15,
        borderStyle: 'solid',
        borderWidth: 0.6,
        borderColor: '#8cc8ff',
        marginRight: 20,
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        color: '#201d5e',
        fontSize: 16,
        fontWeight: '600',
    },
})


export default BoxText
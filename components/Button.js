import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


function Button(props) {

    const { onPress, title, titleStyle, buttonStyle } = props

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={{...styles.container, ...buttonStyle}}>
                    <Text style={{...styles.text, ...titleStyle}}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#201d5e',
        borderRadius: 7,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
})


export default Button
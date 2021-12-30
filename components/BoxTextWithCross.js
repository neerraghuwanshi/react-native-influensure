import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BoxText from './BoxText'


function BoxTextWithCross(props) {

    const { title, index, containerStyle, textStyle } = props

    return (
        <View style={styles.container} key={index}>
            <BoxText
                title={title}
                containerStyle={{
                    ...styles.boxContainerStyle, 
                    ...containerStyle
                }}
                textStyle={textStyle}/>
            <View style={styles.iconContainer}>
                <Text style={{...styles.text, ...textStyle}}>
                    &#10005;
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: 'red',
    },
    boxContainerStyle: {
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        marginRight: 0,
        marginTop: 0,
        paddingRight: 0,
    },
    iconContainer: {
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6ff',
        borderStyle: 'solid',
        borderColor: '#8cc8ff',
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 0.6,
        borderLeftWidth: 0,
        paddingVertical: 14.5,
        paddingHorizontal: 15,
    },
    text:{
        textAlign: 'center',
        color: '#201d5e',
        fontSize: 17,
        fontWeight: '600',
    }
})


export default BoxTextWithCross
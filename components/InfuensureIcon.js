import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


function InfuensureIcon() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                </View>
            </View>
            <Text style={styles.text}>
                Influenscure
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerContainer: {
        width: 20,
        height: 20,
        padding: 2,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    innerContainer: {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        width: 12,
        height: 6,
        backgroundColor: '#ff8896',
    },
    text: {
        color: 'white',
        marginLeft: 6,
        fontWeight: '600',
        fontSize: 16.5,
    },
})


export default InfuensureIcon

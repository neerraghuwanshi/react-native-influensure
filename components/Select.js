import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors'


export const Option = (props) => {

    return (
        <View style={{
            ...styles.mainOptionsContainer, 
            ...props.mainOptionsContainer
            }}>
            <TouchableOpacity 
                onPress={() => {
                    props.onPress(props.value)
                }}>
                <View style={{
                    ...styles.optionsContainer,
                    ...props.optionsContainer
                    }}>
                    {props.selectedValue == props.value ?
                        <View style={{
                            ...styles.selectedOptionContainer,
                            ...props.selectedOptionContainer
                            }}>
                        </View> :
                        <View></View>}
                </View>
            </TouchableOpacity>
            <Text style={{...styles.title, ...props.style}}>
                {props.title}
            </Text>
        </View>
    )
        
}


export default function Select(props) {

    return (
        <View style={{...styles.mainContainer, ...props.mainContainer}}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    mainOptionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
    },
    optionsContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.primary,
    },
    selectedOptionContainer: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: Colors.primary,
    },
    title: {
        color: Colors.primary,
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 10,
    },
})
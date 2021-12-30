import React, { useRef } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'



function IconTextInput(props) {
    
    const { containerStyle, inputStyle, iconType, iconSize, iconName, iconColor } = props
    
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <View style={{...styles.container, ...containerStyle}}>
            <TextInput
                ref={inputRef}
                style={{
                    ...styles.textInput, 
                    ...inputStyle
                }}
                autoCapitalize='none'
                autoCorrect={false}
                {...props} 
                />
            <View>
                <TouchableWithoutFeedback onPress={focusInput}>
                    <View style={styles.iconContainer}>
                        <Icon
                            type={iconType}
                            size={iconSize ? iconSize : 13}
                            name={iconName}
                            color={iconColor}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 17,
    },
    textInput: {
        flex: 1,
        height: 50,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderStyle: 'solid',
        borderColor: '#b6cbff',
        borderWidth: 1.4,
        borderRightWidth: 0,
        paddingHorizontal: 10,
        color: '#201d5e',
        fontWeight: '500',
        fontSize: 17,
    },
    iconContainer: {
        height: 50,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth: 1.4,
        borderLeftWidth: 0,
        borderStyle: 'solid',
        borderColor: '#b6cbff',
        paddingRight: 10,
        justifyContent: 'center',
    },
})


export default IconTextInput
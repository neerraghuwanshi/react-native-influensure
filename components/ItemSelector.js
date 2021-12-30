import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import BoxTextWithCross from './BoxTextWithCross'



function ItemSelector(props) {
    
    const { containerStyle, inputStyle, iconType, iconSize, iconName, iconColor } = props

    return (
        <View style={{...styles.container, ...containerStyle}}>
            <View style={{...styles.input, ...inputStyle}}>
                <View>
                    <BoxTextWithCross title={'Wow'}/>
                </View>
            </View>
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.iconContainer}>
                        <Icon
                            type={iconType}
                            size={iconSize ? iconSize : 11}
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
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 80,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderStyle: 'solid',
        borderColor: '#b6cbff',
        borderWidth: 1.4,
        borderRightWidth: 0,
        paddingHorizontal: 10,
        color: Colors.primary,
        fontWeight: '500',
        fontSize: 17,
    },
    iconContainer: {
        height: 80,
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


export default ItemSelector
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'


function HeaderButton(props) {

    const { onPress, name, color, type } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {props.children ? 
                    props.children :
                    <Icon
                        type={type}
                        size={20}
                        name={name}
                        color={color ? color : 'white'}/>}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
})


export default HeaderButton
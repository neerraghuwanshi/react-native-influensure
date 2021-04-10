import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


function HeaderButton(props) {

    const { onPress, name, color, child } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {child ? 
                    child :
                    <Icon
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
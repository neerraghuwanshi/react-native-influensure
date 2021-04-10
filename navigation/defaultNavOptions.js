import { Platform } from "react-native";

import Colors from "../constants/Colors";


export const defaultNavOptions = {
    headerStyle: {
        backgroundColor: '#201d5e'
    },
    headerTitleStyle: {
        // fontFamily: 'OpenSans-Bold',
        color: 'white'

    },
    // headerBackTitleStyle: {
    //     fontFamily: 'OpenSans-Regular'
    // },
    headerTintColor: Platform.OS === 'android' ? 
                        'white' : 
                        Colors.primary,
    color: 'white',
}
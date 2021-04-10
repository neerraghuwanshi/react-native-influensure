import React from 'react'
import { Text, View, Image } from 'react-native'

import InfluensureIcon from '../components/InfuensureIcon'
import HeaderButton from '../components/HeaderButton';


function Filters() {
    return (
        <View>
            <Text>
                Filters
            </Text>
        </View>
    )
}


export default Filters


export const FiltersScreenOptions = navData => {
    return {
        headerTitle: <InfluensureIcon />,
        headerLeft: () => (
            <HeaderButton
                child={
                    <Image 
                        source={require('../images/bars.png')}/>
                }
                onPress={()=>navData.navigation.toggleDrawer()} />
        ),
    }
}

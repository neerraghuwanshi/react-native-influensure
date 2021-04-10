import React from 'react'
import { Text, View, Image } from 'react-native'

import InfluensureIcon from '../components/InfuensureIcon'
import HeaderButton from '../components/HeaderButton';


function CreateCampaign() {
    return (
        <View>
            <Text>
                CreateCampaigns
            </Text>
        </View>
    )
}


export default CreateCampaign


export const CreateCampaignScreenOptions = navData => {
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

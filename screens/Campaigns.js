import React from 'react'
import { Text, View, Image } from 'react-native'

import InfluensureIcon from '../components/InfuensureIcon'
import HeaderButton from '../components/HeaderButton';
import CenteredButton from '../components/CenteredButton';


function Campaigns(props) {
    return (
        <CenteredButton 
            title='Create Campaign' 
            onPress={()=>props.navigation.navigate('CreateCampaign')}/>
    )
}


export default Campaigns


export const CampaignsScreenOptions = navData => {
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
        headerRight: () => (
            <HeaderButton
                name="filter"
                onPress={()=>navData.navigation.navigate('Filters')}/>
        ),
    }
}

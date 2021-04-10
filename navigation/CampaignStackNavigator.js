import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import { defaultNavOptions } from './defaultNavOptions'
import Campaigns, { CampaignsScreenOptions } from '../screens/Campaigns';
import Filters, { FiltersScreenOptions } from '../screens/Filters';
import CreateCampaign, { CreateCampaignScreenOptions } from '../screens/CreateCampaign';


const CampaignNavigator = createStackNavigator()

export default HomeStackNavigator = () => {
    return (
        <CampaignNavigator.Navigator
            screenOptions={defaultNavOptions}>
            <CampaignNavigator.Screen 
                name="Campaigns"
                component={Campaigns}
                options={CampaignsScreenOptions}/>
            <CampaignNavigator.Screen 
                name="CreateCampaign"
                component={CreateCampaign}
                options={CreateCampaignScreenOptions}/>
            <CampaignNavigator.Screen 
                name="Filters"
                component={Filters}
                options={FiltersScreenOptions}/>
        </CampaignNavigator.Navigator>
    )
}
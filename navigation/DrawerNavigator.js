import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CenteredButton from '../components/CenteredButton';
import CampaignStackNavigator from './CampaignStackNavigator';
import InitialLoader from '../screens/InitialLoader';


const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator 
            initialRouteName="InitialLoader"
            drawerContent={(navData)=>(
                <CenteredButton
                    title='Create Campaign'
                    onPress={()=>{
                        navData.navigation.navigate('CreateCampaign')
                    }}/>
            )}>
            <Drawer.Screen 
                name="InitialLoader"
                component={InitialLoader}/>
            <Drawer.Screen 
                name="CampaignStackNavigator" 
                component={CampaignStackNavigator}/>
        </Drawer.Navigator>
    );
}
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CenteredButton from '../components/CenteredButton';
import CampaignStackNavigator from './CampaignStackNavigator';


const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <Drawer.Navigator 
            drawerContent={(navData)=>(
                <CenteredButton
                    title='Create Campaign'
                    onPress={()=>navData.navigation.navigate('CreateCampaign')}/>
            )}>
            <Drawer.Screen name="Home" component={CampaignStackNavigator} />
        </Drawer.Navigator>
    );
  }
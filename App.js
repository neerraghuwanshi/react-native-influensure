import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import CampaignStackNavigator from './navigation/CampaignStackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';


enableScreens();

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}


export default App;

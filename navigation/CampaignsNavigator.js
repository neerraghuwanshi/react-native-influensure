import React from 'react'
import { useSelector } from 'react-redux'

import DrawerNavigator from './DrawerNavigator'
import InitialLoader from '../screens/InitialLoader'
import { NavigationContainer } from '@react-navigation/native'


export default function CampaignsNavigator() {

    const campaigns = useSelector(state => state.campaigns.campaigns)

    return (
        <NavigationContainer>
            {!campaigns ?
            <InitialLoader /> :
            <DrawerNavigator />}
        </NavigationContainer>
    )
}
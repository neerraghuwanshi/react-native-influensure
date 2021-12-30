import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

import { SetCampaigns } from '../store/actions/campaignFunctions'
import Colors from '../constants/Colors';


export default InitialLoader = () => {

    const dispatch = useDispatch()

    const loadData = () => {
        dispatch(SetCampaigns())
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View 
            style={{
                flex: 1, 
                backgroundColor: Colors.primary
            }}>
        </View>
    )
}
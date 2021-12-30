import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Image, StyleSheet } from 'react-native'

import InfluensureIcon from '../components/InfuensureIcon'
import HeaderButton from '../components/HeaderButton';
import CenteredButton from '../components/CenteredButton';
import Campaign from '../components/Campaign';
import Colors from '../constants/Colors';


function Campaigns(props) {

    const data = useSelector(
        state => state.campaigns.campaigns ? state.campaigns.campaigns: []
    )

    const campaigns = data.map((item)=>(
        <Campaign
            item={item}
            title={item.title}
            description={item.description}
            minBudget={item.minBudget}
            maxBudget={item.maxBudget}
            range={item.range}
            followers={item.followers}
            locations={item.locations}
            categories={item.categories} />
    ))

    return (
        data.length > 0 ?
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            {campaigns}
        </ScrollView> :
        <CenteredButton 
            title='Create Campaign' 
            onPress={()=>props.navigation.navigate('CreateCampaign')}/>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    }
})


export default Campaigns


export const CampaignsScreenOptions = navData => {
    return {
        headerTitle: <InfluensureIcon />,
        headerLeft: () => (
            <HeaderButton
                onPress={()=>navData.navigation.toggleDrawer()}>
                <Image 
                    source={require('../images/bars.png')}/>
            </HeaderButton>
        ),
        headerRight: () => (
            <HeaderButton
                type='antdesign'
                name="filter"
                onPress={()=>navData.navigation.navigate('Filters')}/>
        ),
    }
}

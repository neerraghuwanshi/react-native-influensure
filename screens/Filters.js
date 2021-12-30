import React, { useEffect } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { filterCampaigns } from '../store/actions/campaignFunctions'

import ItemSelector from '../components/ItemSelector'
import { setCampaignFilters } from '../store/actions/campaignFilters';
import InfluensureIcon from '../components/InfuensureIcon'
import HeaderButton from '../components/HeaderButton';
import IconTextInput from '../components/IconTextInput';
import Button from '../components/Button';
import { setCampaigns } from '../store/actions/campaigns';


function Filters() {

    const locations = useSelector(state => state.campaignFilters.locations)
    const categories = useSelector(state => state.campaignFilters.categories)
    const followers = useSelector(state => state.campaignFilters.followers)
    const minBudget = useSelector(state => state.campaignFilters.minBudget)
    const maxBudget = useSelector(state => state.campaignFilters.maxBudget)


    const dispatch = useDispatch()

    const applyFilters = async() => {
        let locationsList = locations.trim().split(/\s*,\s*/)
        let categoriesList = categories.trim().split(/\s*,\s*/)
        if (locationsList[0] === ''){
            locationsList = locationsList.slice(1, locationsList.length)
        }
        if (categoriesList[0] === ''){
            categoriesList = categoriesList.slice(1, categoriesList.length)
        }
        if (locationsList[locationsList.length-1] === ''){
            locationsList.pop()
        }
        if (categoriesList[categoriesList.length-1] === ''){
            categoriesList.pop()
        }
        let filters = {
            locations: locationsList,
            categories: categoriesList,
            followers, 
            minBudget,
            maxBudget,
        }
        let campaigns = await AsyncStorage.getItem('campaigns')
        campaigns = JSON.parse(campaigns)
        await dispatch(setCampaigns(filterCampaigns(campaigns, filters)))
        filters = JSON.stringify(filters)
        await AsyncStorage.setItem('filters', filters)
    }

    return (
        <ScrollView 
            style={styles.mainContainer}
            showsVerticalScrollIndicator={false}>

            <Text style={styles.title}>
                Filter
            </Text>

            <Text style={styles.label}>
                Location
            </Text>
            <IconTextInput
                value={locations}
                onChangeText={
                    text => dispatch(setCampaignFilters('locations', text))
                }
                placeholder='Search Location'
                iconType='ionicon'
                iconName='location-sharp'
                iconSize={17}
                iconColor='#ff8896'/>

            <Text style={styles.label}>
                Categories
            </Text>
            <IconTextInput
                value={categories}
                onChangeText={
                    text => dispatch(setCampaignFilters('categories', text))
                }
                placeholder='Search Cateogory'
                iconType='antdesign'
                iconName='down'
                iconSize={17}
                iconColor='#ff8896'/>

            <Text style={styles.label}>
                No of followers
            </Text>
            <IconTextInput
                value={followers}
                onChangeText={
                    text => dispatch(setCampaignFilters('followers', text))
                }
                placeholder='Search Followers'
                iconType='antdesign'
                iconName='down'
                iconSize={17}
                iconColor='#ff8896' />

            <Text style={styles.label}>
                What is your budget for this campaign?
            </Text>
            <View style={{...styles.rowContainer, ...styles.budgetRow}}>
                <IconTextInput
                    value={minBudget}
                    onChangeText={
                        text => dispatch(setCampaignFilters('minBudget', text))
                    }
                    containerStyle={styles.budgetIconTextInput}
                    placeholder='Min'
                    iconType='font-awesome'
                    iconName='rupee'
                    iconColor='#919191' />
                <IconTextInput
                    value={maxBudget}
                    onChangeText={
                        text => dispatch(setCampaignFilters('maxBudget', text))
                    }
                    containerStyle={styles.budgetIconTextInput}
                    placeholder='Max'
                    iconType='font-awesome'
                    iconName='rupee'
                    iconColor='#919191' />
            </View>

            <ItemSelector
                iconType='antdesign'
                iconName='down'
                iconSize={17}
                iconColor='#ff8896'/>

            <Button 
                onPress={applyFilters}
                title='Filter'
                buttonStyle={styles.button}/>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#201d5e',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    label: {
        color: '#201d5e',
        fontSize: 17,
        fontWeight: '600',
        marginTop: 40,
    },
    textInput: {
        width: '100%',
        height: 50,
        marginTop: 17,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#b6cbff',
        borderWidth: 1.4,
        paddingHorizontal: 10,
        color: '#201d5e',
        fontWeight: '500',
        fontSize: 17,
    },
    descriptionCount: {
        marginTop: 40,
        color: '#919191',
        fontSize: 16,
        fontWeight: '300',
    },
    descriptionTextInput: {
        height: 175,
    },
    budgetRow: {
        justifyContent: 'flex-start',
    },
    budgetIconTextInput: {
        width: '40%',
        marginRight: 20,
    },
    button: {
        marginTop: 60,
        marginBottom: 50,
        height: 65,
        borderRadius: 5,
        backgroundColor: '#ff8896',
        alignContent: 'flex-end',
    },
})


export default Filters


export const FiltersScreenOptions = navData => {
    return {
        headerTitle: <InfluensureIcon />,
        headerLeft: () => (
            <HeaderButton
                onPress={()=>navData.navigation.toggleDrawer()}>
                <Image 
                    source={require('../images/bars.png')}/>
            </HeaderButton>
        ),
    }
}
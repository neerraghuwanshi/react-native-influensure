import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import InfluensureIcon from '../components/InfuensureIcon'
import HeaderButton from '../components/HeaderButton';
import IconTextInput from '../components/IconTextInput';
import Button from '../components/Button';
import Select, { Option } from '../components/Select';
import { addCampaign } from '../store/actions/campaigns';
import AsyncStorage from '@react-native-community/async-storage';


function CreateCampaign() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [locations, setLocations] = useState('')
    const [categories, setCategories] = useState('')
    const [followers, setFollowers] = useState('')
    const [responseTime, setResponseTime] = useState('')
    const [minBudget, setMinBudget] = useState('')
    const [maxBudget, setMaxBudget] = useState('')
    const [engagementRate, setEngagementRate] = useState('')
    const [brandCollab, setBrandCollab] = useState('')
    const [workedWithOtherBrands, setWorkedWithOtherBrands] = useState(true)

    const dispatch = useDispatch()

    const createCampaign = async() => {

        let locationsList = locations.trim().split(/\s*,\s*/)
        let categoriesList = categories.trim().split(/\s*,\s*/)
        let brandCollabList = brandCollab.trim().split(/\s*,\s*/)
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
        if (brandCollabList[brandCollabList.length-1] === ''){
            brandCollabList.pop()
        }
        if (brandCollabList[0] === ''){
            brandCollabList = brandCollabList.slice(1, brandCollabList.length)
        }

        let newCampaign = {
            title, 
            description, 
            locations: locationsList,
            categories: categoriesList,
            followers: parseInt(followers),
            responseTime,
            minBudget: parseInt(minBudget),
            maxBudget: parseInt(maxBudget),
            engagementRate,
            brandCollab,
            workedWithOtherBrands
        }
        await dispatch(addCampaign(newCampaign))
        let campaigns = await AsyncStorage.getItem('campaigns')
        campaigns = JSON.parse(campaigns)
        campaigns = [newCampaign, ...campaigns]
        await AsyncStorage.setItem('campaigns', JSON.stringify(campaigns))
    }

    return (
        <ScrollView 
            style={styles.mainContainer}
            showsVerticalScrollIndicator={false}>

            <Text style={styles.title}>
                Create Campaign
            </Text>

            <Text style={styles.label}>
                Name of Campaign
            </Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}/>

            <View style={styles.rowContainer}>
                <Text style={styles.label}>
                    Description
                </Text>
                <Text style={styles.descriptionCount}>
                    {`${description.length}/500`}
                </Text>
            </View>
            <TextInput
                value={description}
                onChangeText={text => setDescription(text)}
                style={{ ...styles.textInput, ...styles.descriptionTextInput }}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                autoCorrect={false}
                multiline />

            <Text style={styles.label}>
                Target Location of your campaign
            </Text>
            <IconTextInput
                value={locations}
                onChangeText={text => setLocations(text)}
                placeholder='Location'
                iconType='ionicon'
                iconName='location-sharp'
                iconSize={17}
                iconColor='#ff8896' />

            <Text style={styles.label}>
                {'Category(s) for your campaign'}
            </Text>
            <IconTextInput
                value={categories}
                onChangeText={text => setCategories(text)}
                placeholder='Cateogory'
                iconType='antdesign'
                iconName='down'
                iconSize={17}
                iconColor='#ff8896' />

            <Text style={styles.label}>
                No of followers
            </Text>
            <TextInput
                value={followers}
                onChangeText={text => setFollowers(text)}
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}/>

            <Text style={styles.label}>
                Average response time of the Influencers
            </Text>
            <IconTextInput
                value={responseTime}
                onChangeText={text => setResponseTime(text)}
                placeholder='Response Time'
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
                    onChangeText={text => setMinBudget(text)}
                    containerStyle={styles.budgetIconTextInput}
                    placeholder='Min'
                    iconType='font-awesome'
                    iconName='rupee'
                    iconColor='#919191' />
                <IconTextInput
                    value={maxBudget}
                    onChangeText={text => setMaxBudget(text)}
                    containerStyle={styles.budgetIconTextInput}
                    placeholder='Max'
                    iconType='font-awesome'
                    iconName='rupee'
                    iconColor='#919191' />
            </View>

            <Text style={styles.label}>
                Post Engagement rate of the Influencers
            </Text>
            <IconTextInput
                value={engagementRate}
                onChangeText={text => setEngagementRate(text)}
                placeholder='Rate'
                iconType='font-awesome-5'
                iconName='percent'
                iconColor='#919191' />

            <Text style={styles.label}>
                Kind of brand collab
            </Text>
            <IconTextInput
                value={brandCollab}
                onChangeText={text => setBrandCollab(text)}
                placeholder='Brand collab'
                iconType='antdesign'
                iconName='down'
                iconSize={17}
                iconColor='#ff8896' />

            <Text style={styles.label}>
                Have you worked with any brand?
            </Text>
            <Select 
                mainContainer={styles.radio}>
                <Option 
                    title='Yes'
                    value={true}
                    selectedValue={workedWithOtherBrands}
                    onPress={setWorkedWithOtherBrands}/>
                <Option 
                    title='No'
                    value={false}
                    selectedValue={workedWithOtherBrands}
                    onPress={setWorkedWithOtherBrands}/>
            </Select>

            <Button
                onPress={createCampaign}
                title='Create'
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
        marginTop: 40,
        marginBottom: 50,
        height: 65,
        borderRadius: 5,
        backgroundColor: '#ff8896',
    },
    radio: {
        marginTop: 17,
    }
})


export default CreateCampaign


export const CreateCampaignScreenOptions = navData => {
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

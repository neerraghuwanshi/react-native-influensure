import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import BoxText from './BoxText';


function Campaign(props) {

    const { title, description, minBudget, maxBudget, followers, locations, categories, item } = props

    return (
        <View style={styles.mainContainer} key={item}>

            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <View style={styles.rangeContainer}>
                <Icon
                    type='font-awesome'
                    size={20}
                    name='rupee'
                    color='#ff8896'/>
                <Text style={styles.range}>
                    {`${minBudget}-${maxBudget}`}
                </Text>
            </View>

            <View style={styles.rangeContainer}>
                <Icon
                    type='feather'
                    size={20}
                    name='users'
                    color='#ff8896'/>
                <Text style={styles.range}>{followers}</Text>
            </View>

            <View style={styles.locationsContainer}>
                <View style={styles.iconsContainer}>
                    <Icon
                        type='ionicon'
                        size={20}
                        name='location-sharp'
                        color='#ff8896'/>
                </View>
                <View>
                    <Text style={styles.locationTitle}>
                        Locations
                    </Text>
                    <View style={styles.locations}>
                        {
                            locations.map((item, index)=>(
                                <BoxText index={index} title={item}/>
                            ))
                        }
                    </View>
                </View>
            </View>

            <View style={styles.locationsContainer}>
                <View style={styles.iconsContainer}>
                    <Icon
                        type='ionicon'
                        size={20}
                        name='options'
                        color='#ff8896'/>
                </View>
                <View>
                    <Text style={styles.locationTitle}>
                        Categories
                    </Text>
                    <View style={styles.locations}>
                        {
                            categories.map((item, index)=>(
                                <BoxText index={index} title={item}/>
                            ))
                        }
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 25,
        padding: 52,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: '#34326d',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        color: '#201d5e',
        opacity: 0.52,
        fontSize: 16,
        fontWeight: '300',
        marginTop: 10,
    },
    rangeContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    range: {
        color: '#34326d',
        fontSize: 16,
        marginLeft: 15,
    },
    locationsContainer: {
        marginTop: 25,
        flexDirection: 'row',
    },
    iconsContainer: {
        marginRight: 15,
    },
    locationTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#201d5e',
    },
    locations: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})


export default Campaign
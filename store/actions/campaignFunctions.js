import AsyncStorage from '@react-native-community/async-storage';

import { setCampaigns } from './campaigns'
import { setCampaignFilters } from './campaignFilters'


export const filterCampaigns = (campaigns, filters) => {

    const { locations, categories, followers, minBudget, maxBudget } = filters

    const Filter = (campaign) => {
        if (locations && locations.length > 0){
            for (let location of locations){
                if (!campaign.locations.includes(location)){
                    return false
                }
            }
        }
        if (categories && categories.length > 0){
            console.log(campaign.categories, categories)
            for (let category of categories){
                if (!campaign.categories.includes(category)){
                    return false
                }
            }
        }
        if (followers){
            if (!(campaign.followers >= parseInt(followers))){
                return false
            }
        }
        if (minBudget){
            if (!(campaign.minBudget <= parseInt(minBudget))){
                return false
            }
        }
        if (maxBudget){
            if (!(campaign.maxBudget >= parseInt(maxBudget))){
                return false
            }
        }
        return true
    }

    return campaigns.filter(Filter)
}

export const SetCampaigns = () => {
    return async dispatch => {
        let campaigns = await AsyncStorage.getItem('campaigns')
        if (campaigns){
            campaigns = JSON.parse(campaigns)
            let filters = await AsyncStorage.getItem('filters')
            if (filters){
                filters = JSON.parse(filters)
                campaigns = filterCampaigns(campaigns, filters)
                await dispatch(setCampaignFilters('locations', filters.locations.join()))
                await dispatch(setCampaignFilters('categories', filters.categories.join()))
                await dispatch(setCampaignFilters('followers', filters.followers))
                await dispatch(setCampaignFilters('minBudget', filters.minBudget))
                await dispatch(setCampaignFilters('maxBudget', filters.maxBudget))
            }
        }
        else{
            campaigns = []
        }
        await dispatch(setCampaigns(campaigns))
    }
}
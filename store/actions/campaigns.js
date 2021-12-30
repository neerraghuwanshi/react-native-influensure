export const SET_CAMPAIGNS = 'SET_CAMPAIGNS'
export const ADD_CAMPAIGN = 'ADD_CAMPAIGN'


export const setCampaigns = campaigns => {
    return {
        type: SET_CAMPAIGNS,
        campaigns
    }
}

export const addCampaign = campaign => {
    return {
        type: ADD_CAMPAIGN,
        campaign
    }
}
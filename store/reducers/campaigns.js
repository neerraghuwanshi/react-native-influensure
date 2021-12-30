import { ADD_CAMPAIGN, SET_CAMPAIGNS } from '../actions/campaigns';


const initialState = {
    campaigns: null,
}

export const campaignReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_CAMPAIGNS:
            return {
                ...state,
                campaigns: action.campaigns
            }
        case ADD_CAMPAIGN:
            campaigns = state.campaigns
            return {
                ...state,
                campaigns: [action.campaign, ...campaigns]
            }
        default:
            return state
    }
}
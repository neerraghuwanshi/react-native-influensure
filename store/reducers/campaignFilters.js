import { SET_CAMPAIGN_FILTERS } from '../actions/campaignFilters';


const initialState = {
    locations: '',
    categories: '',
    followers: '',
    minBudget: '',
    maxBudget: '',
}

export const campaignFiltersReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_CAMPAIGN_FILTERS:
            return {
                ...state,
                [action.filterName]: action.filter,
            }
        default:
            return state
    }
}
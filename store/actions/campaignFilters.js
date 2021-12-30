export const SET_CAMPAIGN_FILTERS = 'SET_CAMPAIGN_FILTERS'


export const setCampaignFilters = (filterName, filter) => {
    return {
        type: SET_CAMPAIGN_FILTERS,
        filterName,
        filter
    }
}
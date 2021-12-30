import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux'
import Thunk from 'redux-thunk'

import { campaignReducer } from './reducers/campaigns'
import { campaignFiltersReducer } from './reducers/campaignFilters'


const reducer = combineReducers({
    campaigns: campaignReducer,
    campaignFilters: campaignFiltersReducer,
})


export const store = createStore(
    reducer,
    applyMiddleware(Thunk)
)
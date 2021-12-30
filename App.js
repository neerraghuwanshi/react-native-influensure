import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import CampaignsNavigator from './navigation/CampaignsNavigator';


const App = () => {
    return (
        <Provider store={store}>
            <CampaignsNavigator />
        </Provider>
    )
}


export default App;

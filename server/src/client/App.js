import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';
import { fetchCurrentUser } from './actions';

// routes configured in Routes.js are passed as props
const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    ); 
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
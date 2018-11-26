import React from 'react';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';


// setup routes according to react-router-config syntax
// not passing path to App makes sure its rendered on every page
export default [   
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {   
                // adds all properties exported from UsersListPage with the same names
                ...UsersListPage,
                path: '/users',
            }
        ]
    }
];
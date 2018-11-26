import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';


// setup routes according to react-router-config syntax
export default [
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

];
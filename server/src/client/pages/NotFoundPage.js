import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    // staticContext.notFound = true;

    return ( 
        <div className="center-align" style={{  marginTop: '200px '}}>
            <h2>Oops, page does not exist.<br/>Make sure you typed in the right address</h2>
        </div>
    );
};

export default {
    component: NotFoundPage
};
import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Dashboard from '../../views/Dashboard';

const StRouterComponent = styled.div`
    min-height: 100%;
`;

const RouterComponent = () => {
    return (
        <StRouterComponent>
            <Router>
                <Dashboard path="/" />
            </Router>
        </StRouterComponent>
    );
};

export default RouterComponent;

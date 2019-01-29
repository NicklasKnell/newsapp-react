import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { routes } from '../Router/routes';

export const NAVIGATION_WIDTH = 60;

const StNavigation = styled.div`
    position: fixed;
    width: ${NAVIGATION_WIDTH}px;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: #090e28;
    color: white;
`;

const StLink = styled(Link)`
    height: ${NAVIGATION_WIDTH}px;
`;

const Navigation = () => {
    const { HOME_ROUTE, SPORTS_ROUTE, SCIENCE_ROUTE } = routes;

    return (
        <StNavigation>
            <StLink to={HOME_ROUTE}>HOME</StLink>
            <StLink to={SPORTS_ROUTE}>SPORTS</StLink>
            <StLink to={SCIENCE_ROUTE}>SCIENCE</StLink>
        </StNavigation>
    );
};

export default Navigation;

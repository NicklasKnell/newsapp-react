import React from 'react';
import styled from 'styled-components';

export const NAVIGATION_WIDTH = 60;

const StNavigation = styled.div`
    position: fixed;
    width: ${NAVIGATION_WIDTH}px;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: #090e28;
`;

const Navigation = () => {
    return <StNavigation />;
};

export default Navigation;

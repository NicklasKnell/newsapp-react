import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation, { NAVIGATION_WIDTH } from './js/components/Navigation';
import RouterComponent from './js/components/Router';

const StApp = styled.div`
    margin-left: ${NAVIGATION_WIDTH}px;
    background-color: #404040;
    min-height: 100%;
`;

class App extends Component {
    render() {
        return (
            <StApp>
                <Navigation />
                <RouterComponent />
            </StApp>
        );
    }
}

export default App;

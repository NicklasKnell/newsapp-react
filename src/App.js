import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { store } from './store/store';
import Navigation, { NAVIGATION_WIDTH } from './components/Navigation';
import RouterComponent from './components/Router';

const StApp = styled.div`
    margin-left: ${NAVIGATION_WIDTH}px;
    height: 100%;
`;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StApp>
                    <Navigation />
                    <RouterComponent />
                </StApp>
            </Provider>
        );
    }
}

export default App;

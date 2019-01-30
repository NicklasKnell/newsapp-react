import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import Navigation, { NAVIGATION_WIDTH } from './components/Navigation';
import RouterComponent from './components/Router';

const StApp = styled.div`
    margin-left: ${NAVIGATION_WIDTH}px;
    min-height: 100%;
    background-color: ${props => props.theme.PAGE_BG};
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <StApp>
                    <Navigation />
                    <RouterComponent />
                </StApp>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(mapStateToProps)(App);

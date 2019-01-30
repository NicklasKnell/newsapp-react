import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { connect } from 'react-redux';

import { routes } from '../Router/routes';
import { ACTIVATE_DARKMODE, ACTIVATE_LIGHTMODE } from '../../store/actions';

export const NAVIGATION_WIDTH = 60;

const StNavigation = styled.div`
    position: fixed;
    width: ${NAVIGATION_WIDTH}px;
    height: 100%;
    top: 0;
    left: 0px;
    background-color: ${props => props.theme.NAVIGATION_BG};
    color: ${props => props.theme.NAVIGATION_COLOR};
`;

const navItemStyle = {
    height: NAVIGATION_WIDTH,
    width: '100%',
    'margin-bottom': '20px',
    display: 'inline-flex',
    'align-items': 'center',
    'justify-content': 'center'
};

const StLink = styled(Link)`
    ${() => {
        return { ...navItemStyle };
    }}

    &:hover {
        color: ${props => props.theme.NAVIGATION_COLOR_HOVER};
    }
`;

const StThemePopupButton = styled.a`
    ${() => {
        return { ...navItemStyle };
    }}

    &:hover {
        cursor: pointer;
    }
`;

const StIcon = styled.i`
    font-size: 45px;
`;

const StPopup = styled.div`
    position: absolute;
    left: 100%;
    display: flex;
    height: 30px;
    background-color: ${props => props.theme.NAVIGATION_BG};
`;

const StThemeButton = styled.div`
    line-height: 30px;
    font-size: 18px;
    width: 75px;
    padding: 0 10px;
`;

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showThemeSelection: false
        };
    }

    render() {
        const { HOME_ROUTE, SPORTS_ROUTE, SCIENCE_ROUTE } = routes;

        const popup = !this.state.showThemeSelection ? null : (
            <StPopup v-show="showThemeSelect">
                <StThemeButton onClick={this.props.toggleDarkmode}>Dark</StThemeButton>
                <StThemeButton onClick={this.props.toggleLightmode}>Light</StThemeButton>
            </StPopup>
        );

        return (
            <StNavigation>
                <StLink to={HOME_ROUTE}>
                    <StIcon className="material-icons">home</StIcon>
                </StLink>
                <StLink to={SPORTS_ROUTE}>
                    <StIcon className="material-icons">fitness_center</StIcon>
                </StLink>
                <StLink to={SCIENCE_ROUTE}>
                    <StIcon className="material-icons">find_in_page</StIcon>
                </StLink>
                <StThemePopupButton
                    onClick={() => this.setState({ showThemeSelection: !this.state.showThemeSelection })}
                >
                    <StIcon className="material-icons">color_lens</StIcon>
                    {popup}
                </StThemePopupButton>
            </StNavigation>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDarkmode: () => {
            dispatch({ type: ACTIVATE_DARKMODE });
        },
        toggleLightmode: () => {
            dispatch({ type: ACTIVATE_LIGHTMODE });
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Navigation);

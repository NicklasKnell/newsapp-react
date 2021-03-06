import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';

import Home from '../../views/Home';
import ArticleDetail from '../../views/ArticleDetail';
import Sports from '../../views/Sports';
import Science from '../../views/Science';
import { routes } from './routes';

const StRouterComponent = styled.div`
    min-height: 100%;
`;

const RouterComponent = () => {
    const { HOME_ROUTE, SPORTS_ROUTE, SCIENCE_ROUTE, ARTICLE_DETAIL_ROUTE } = routes;

    return (
        <StRouterComponent>
            <Router>
                <Home path={HOME_ROUTE} />
                <Sports path={SPORTS_ROUTE} />
                <Science path={SCIENCE_ROUTE} />
                <ArticleDetail path={ARTICLE_DETAIL_ROUTE} />
            </Router>
        </StRouterComponent>
    );
};

export default RouterComponent;

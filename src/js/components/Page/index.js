import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ARTICLE_SHAPE } from '../../shared/utils/article';
import ArticleTile from '../ArticleTile';

const StPage = styled.div`
    background-color: #373a49;
`;

const StArticles = styled.div`
    padding: 50px;
    margin: auto;
    width: 70%;
`;

const StArticleTile = styled(ArticleTile)`
    margin-bottom: 60px;
`;

const Page = props => {
    const articleTiles = props.articles.map(article => {
        return <StArticleTile {...article} key={article.id} />;
    });

    return (
        <StPage>
            <StArticles>{articleTiles}</StArticles>
        </StPage>
    );
};

Page.propTypes = {
    articles: PropTypes.arrayOf(ARTICLE_SHAPE).isRequired
};

export default Page;

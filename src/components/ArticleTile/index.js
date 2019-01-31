import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ARTICLE_SHAPE, StArticle } from '../../shared/utils/article';
import { Link } from '@reach/router';
import ArticleMetadata from '../ArticleMetadata';

const StLink = styled(Link)`
    font-size: 45px;
    &:hover {
        color: ${props => props.theme.ARTICLE_TITLE_HOVER};
    }
`;

const StButton = styled(Link)`
    display: inline-flex;
    width: 250px;
    margin-top: 40px;
    font-size: 25px;
    font-weight: 400;
    align-items: center;
    justify-content: center;

    && {
        background-color: ${props => props.theme.ARTICLE_BUTTON_BG};
        color: ${props => props.theme.ARTICLE_BUTTON_COLOR};
        border: solid 2px ${props => props.theme.ARTICLE_BUTTON_BORDER};

        &:hover {
            background-color: ${props => props.theme.ARTICLE_BUTTON_BG_HOVER};
            color: ${props => props.theme.ARTICLE_BUTTON_COLOR_HOVER};
            border-color: ${props => props.theme.ARTICLE_BUTTON_BORDER_HOVER};
        }
    }
`;

const ArticleTile = props => {
    const { title, content, author, releaseDate, id, className } = props;

    const articleLink = `/article/${id}`;

    return (
        <StArticle className={className}>
            <StLink to={articleLink}>{title}</StLink>
            <p>{content}</p>
            <StButton to={articleLink}>More</StButton>
            <ArticleMetadata author={author} releaseDate={releaseDate} />
        </StArticle>
    );
};

ArticleTile.propTypes = {
    ...ARTICLE_SHAPE,
    className: PropTypes.string
};

export default ArticleTile;

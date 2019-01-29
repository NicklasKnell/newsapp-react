import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ARTICLE_SHAPE } from '../../shared/utils/article';
import { Link } from '@reach/router';

const StArticle = styled.div`
    background-color: #ffffff;
    color: #111111;
    padding: 20px 30px;
    border: solid 1px #d4d800;
`;

const StMetadata = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
`;

const StLink = styled(Link)`
    font-size: 30px;
    &:hover {
        color: #090e28;
    }
`;

const StButton = styled(Link)`
    width: 200px;
    height: 30px;
    margin-top: 40px;
    font-size: 16px;
    color: #111111;
    background-color: #d4d800;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
        border: solid 1px #111111;
        background-color: white;
    }
`;

const StSeparator = styled.span`
    width: 20px;
    text-align: center;
`;

const ArticleTile = props => {
    const { title, content, author, releaseDate, id, className } = props;

    const articleLink = `/article/${id}`;

    const separator = !(author && releaseDate) ? null : <StSeparator>|</StSeparator>;

    const authorField = !author ? null : <span>{author}</span>;
    const releaseDateField = !releaseDate ? null : <span>{releaseDate}</span>;

    return (
        <StArticle className={className}>
            <StLink to={articleLink}>{title}</StLink>
            <p>{content}</p>
            <StButton to={articleLink}>More</StButton>
            <StMetadata>
                {authorField}
                {separator}
                {releaseDateField}
            </StMetadata>
        </StArticle>
    );
};

ArticleTile.propTypes = {
    ...ARTICLE_SHAPE,
    className: PropTypes.string
};

export default ArticleTile;

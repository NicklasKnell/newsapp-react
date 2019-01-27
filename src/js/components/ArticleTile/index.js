import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ARTICLE_SHAPE } from '../../shared/utils/article';
import { Link } from '@reach/router';

const StArticle = styled.div`
    background-color: #565a70;
    color: #ffffff;
    padding: 20px 30px;
`;

const StMetadata = styled.div`
    margin-top: 50px;
    text-align: right;
`;

const StLink = styled(Link)`
    &:hover {
        color: #090e28;
    }
`;

const ArticleTile = props => {
    const { title, content, author, releaseDate, id, className } = props;

    const articleLink = `/article/${id}`;

    const authorField = !author ? null : <span>{author}</span>;
    const releaseDateField = !releaseDate ? null : <span>{releaseDate}</span>;

    return (
        <StArticle className={className}>
            <StLink to={articleLink}>
                <h1>{title}</h1>
            </StLink>
            <p>{content}</p>
            <StMetadata>
                {authorField}
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

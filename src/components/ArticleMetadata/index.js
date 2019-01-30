import React from 'react';
import styled from 'styled-components';

const StMetadata = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
`;

const StFieldWithIcon = styled.div`
    display: inline-flex;
    align-items: center;

    i {
        padding-right: 5px;
    }
`;

const StSeparator = styled.span`
    width: 20px;
    text-align: center;
`;

const ArticleMetadata = props => {
    const { author, releaseDate } = props;
    const separator = !(author && releaseDate) ? null : <StSeparator>|</StSeparator>;

    const authorField = !author ? null : (
        <StFieldWithIcon>
            <i className="material-icons">person_outline</i>
            <span>{author}</span>
        </StFieldWithIcon>
    );
    const releaseDateField = !releaseDate ? null : (
        <StFieldWithIcon>
            <i className="material-icons">date_range</i>
            <span>{releaseDate}</span>
        </StFieldWithIcon>
    );

    return (
        <StMetadata>
            {authorField}
            {separator}
            {releaseDateField}
        </StMetadata>
    );
};

export default ArticleMetadata;

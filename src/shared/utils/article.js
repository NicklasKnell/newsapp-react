import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ARTICLE_SHAPE = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    id: PropTypes.number.isRequired
};

export const StArticle = styled.div`
    background-color: ${props => props.theme.ARTICLE_BG};
    color: ${props => props.theme.ARTICLE_COLOR};
    padding: 20px 30px;
    border: solid 2px ${props => props.theme.ARTICLE_BORDER};
    font-weight: 300;
    font-size: 25px;
`;

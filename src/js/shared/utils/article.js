import PropTypes from 'prop-types';

export const ARTICLE_SHAPE = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string,
    releaseDate: PropTypes.instanceOf(Date),
    id: PropTypes.number.isRequired
};
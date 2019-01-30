import axios from 'axios';

export const SPORTS_REQUEST = 'SPORTS_REQUEST';
export const SCIENCE_REQUEST = 'SCIENCE_REQUEST';
export const HOME_REQUEST = 'HOME_REQUEST';

export function fetchArticles(articleType) {
    const urlBase = 'api/article-lists';
    let requestUrl = '';

    switch (articleType) {
        case SPORTS_REQUEST:
            requestUrl = `${urlBase}/sports`;
            break;
        case SCIENCE_REQUEST:
            requestUrl = `${urlBase}/science`;
            break;
        case HOME_REQUEST:
            requestUrl = `${urlBase}/home`;
            break;
        default:
            return null;
    }

    return axios.get(requestUrl).then(response => {
        return response.data;
    });
}

export function fetchArticle(articleId) {
    const requestUrl = `../api/article/${articleId}`;
    return axios.get(requestUrl).then(response => {
        return response.data;
    });
}

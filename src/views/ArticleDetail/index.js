import React from 'react';
import styled from 'styled-components';

import { fetchArticle } from '../../shared/utils/articleRequests';
import { StArticle } from '../../shared/utils/article';
import ArticleMetadata from '../../components/ArticleMetadata';

const StWrapper = styled.div`
    padding: 50px;
    margin: auto;
    width: 70%;
`;

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = { article: {} };
    }

    componentDidMount() {
        fetchArticle(this.props.id)
            .then(data => {
                this.setState({ article: data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const article = this.state.article;

        const articleComponent = !article ? null : (
            <StArticle>
                <h1>{article.title}</h1>
                <p>{article.content}</p>
                <ArticleMetadata author={article.author} releaseDate={article.releaseDate} />
            </StArticle>
        );
        return <StWrapper>{articleComponent}</StWrapper>;
    }
}

export default ArticleDetail;

import React from 'react';
import Page from '../../components/Page';

import { fetchArticles, SPORTS_REQUEST } from '../../shared/utils/articleRequests';

class Sports extends React.Component {
    constructor(props) {
        super(props);

        this.state = { articles: [], loading: false };
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetchArticles(SPORTS_REQUEST)
            .then(data => {
                this.setState({ articles: data, loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log(error);
            });
    }

    render() {
        return <Page articles={this.state.articles} />;
    }
}

export default Sports;

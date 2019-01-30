import React from 'react';
import Page from '../../components/Page';

import { fetchArticles, SCIENCE_REQUEST } from '../../shared/utils/articleRequests';

class Science extends React.Component {
    constructor(props) {
        super(props);

        this.state = { articles: [] };
    }

    componentDidMount() {
        fetchArticles(SCIENCE_REQUEST)
            .then(data => {
                this.setState({ articles: data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <Page articles={this.state.articles} />;
    }
}

export default Science;

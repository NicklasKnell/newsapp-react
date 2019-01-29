import React from 'react';
import Page from '../../components/Page';
import { HOME_REQUEST, fetchArticles } from '../../shared/utils/articleRequests';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = { articles: [], loading: false };
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetchArticles(HOME_REQUEST)
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

export default Home;

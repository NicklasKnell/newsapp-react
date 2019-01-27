import React from 'react';
import Page from '../../components/Page';
import { SportArticles } from '../../../mockdata/articles';
const Dashboard = () => {
    return <Page articles={SportArticles} />;
};

export default Dashboard;

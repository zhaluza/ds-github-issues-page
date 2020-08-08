import React from 'react';
import './sass/app.scss';
import RepoHeader from './components/RepoHeader';
import RepoFilterBar from './components/RepoFilterBar';
import IssuesContainer from './components/IssuesContainer';

const App: React.FC = () => (
    <div className="app">
        <RepoHeader />
        <RepoFilterBar />
        <IssuesContainer />
    </div>
);

export default App;

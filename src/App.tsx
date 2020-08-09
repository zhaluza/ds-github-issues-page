import React from 'react';
import './sass/app.scss';
import Navbar from './components/Navbar';
import RepoHeader from './components/RepoHeader';
import RepoFilterBar from './components/RepoFilterBar';
import IssuesContainer from './components/IssuesContainer';

const App: React.FC = () => (
    <div className="app">
        <Navbar />
        <RepoHeader />
        <RepoFilterBar />
        <IssuesContainer />
    </div>
);

export default App;

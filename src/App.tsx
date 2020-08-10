import React, { useState, useEffect } from 'react';
import './sass/app.scss';
import Navbar from './components/Navbar';
import RepoHeader from './components/RepoHeader';
import RepoFilterBar from './components/RepoFilterBar';
import IssuesContainer from './components/IssuesContainer';

const App: React.FunctionComponent = () => {
    const [isMobile, setIsMobile] = useState<boolean>(true);
    // detect window size on render
    useEffect(() => {
        if (window.innerWidth > 700) {
            setIsMobile(false);
        }
    }, []);
    return (
        <div className="app">
            <Navbar isMobile={isMobile} />
            <RepoHeader isMobile={isMobile} />
            <RepoFilterBar isMobile={isMobile} />
            <IssuesContainer isMobile={isMobile} />
        </div>
    );
};

export default App;

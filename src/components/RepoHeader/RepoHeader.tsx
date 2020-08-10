import React, { Fragment } from 'react';
import './repoHeader.scss';

interface RepoHeaderProps {
    isMobile: boolean;
}

const RepoHeader: React.FC<RepoHeaderProps> = ({ isMobile }: RepoHeaderProps) => {
    return (
        <div className="repo-header">
            <div className="header__top">
                <h2>
                    <i className="fas fa-book"></i> <a href="https://github.com/facebook">facebook</a>/
                    <a href="https://github.com/facebook/react" className="bold">
                        react
                    </a>
                </h2>
                {!isMobile && (
                    <div className="header__top-right">
                        <div className="header__top-watch">
                            <button>
                                <i className="far fa-eye"></i>Watch
                            </button>
                        </div>
                        <div className="header__top-star">
                            <button>
                                <i className="far fa-star"></i>Star
                            </button>
                        </div>
                        <div className="header__top-fork">
                            <button>
                                <i className="fas fa-code-branch"></i>Fork
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="header__bottom">
                <div className="header__bottom-options">
                    <a href="https://github.com/facebook/react">
                        <i className="fas fa-code"></i>Code
                    </a>
                    <a href="#">
                        <i className="fas fa-exclamation-circle"></i>Issues
                    </a>
                    <a href="https://github.com/facebook/react/pulls">
                        <i className="fas fa-project-diagram"></i>Pull requests
                    </a>
                    {!isMobile && (
                        <Fragment>
                            <a href="https://github.com/facebook/react/actions">
                                <i className="far fa-play-circle"></i>Actions
                            </a>
                            <a href="https://github.com/facebook/react/projects">
                                <i className="fas fa-tasks"></i>Projects
                            </a>
                            <a href="https://github.com/facebook/react/wiki">
                                <i className="fas fa-book-open"></i>Wiki
                            </a>
                            <a href="https://github.com/facebook/react/security">
                                <i className="fas fa-shield-alt"></i>Security
                            </a>
                            <a href="https://github.com/facebook/react/pulse">
                                <i className="fas fa-chart-line"></i>Insights
                            </a>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RepoHeader;

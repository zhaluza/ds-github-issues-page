import React from 'react';
import './repoHeader.scss';

interface Props {}

const RepoHeader = (props: Props) => {
    return (
        <div className="repo-header">
            <div className="header__top">
                <h2>
                    <i className="fas fa-book"></i> <a href="https://github.com/facebook">facebook</a>/
                    <a href="https://github.com/facebook/react">react</a>
                </h2>
                <div className="header__top-right">
                    <div className="header__top-watch">
                        <button>
                            <i className="far fa-eye"></i>Watch
                        </button>
                        <button>6.7k</button>
                    </div>
                    <div className="header__top-star">
                        <button>
                            <i className="far fa-star"></i>Star
                        </button>
                        <button>154k</button>
                    </div>
                    <div className="header__top-fork">
                        <button>
                            <i className="fas fa-code-branch"></i>Fork
                        </button>
                        <button>30.1k</button>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__bottom-options">
                    <a href="#">
                        <i className="fas fa-code"></i>Code
                    </a>
                    <a href="#">
                        <i className="fas fa-exclamation-circle"></i>Issues
                    </a>
                    <a href="#">
                        <i className="fas fa-project-diagram"></i>Pull requests
                    </a>
                    <a href="#">
                        <i className="far fa-play-circle"></i>Actions
                    </a>
                    <a href="#">
                        <i className="fas fa-tasks"></i>Projects
                    </a>
                    <a href="#">
                        <i className="fas fa-book-open"></i>Wiki
                    </a>
                    <a href="#">
                        <i className="fas fa-shield-alt"></i>Security
                    </a>
                    <a href="#">
                        <i className="fas fa-chart-line"></i>Insights
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RepoHeader;

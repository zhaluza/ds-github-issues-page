import React from 'react';
import './repoFilterBar.scss';

const RepoFilterBar: React.FC = () => {
    return (
        <div className="repo-filter-bar">
            <div className="bar bar-1">
                <button>Filters</button>
                <input type="text" placeholder="is:issue is:open" />
            </div>
            <div className="bar bar-2">
                <button>
                    <i className="fas fa-tags"></i>Labels
                </button>
                <button>
                    <i className="fas fa-map-signs"></i>Milestones
                </button>
            </div>
            <button>New Issue</button>
        </div>
    );
};

export default RepoFilterBar;

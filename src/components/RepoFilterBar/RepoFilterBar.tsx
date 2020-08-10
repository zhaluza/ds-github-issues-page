import React from 'react';
import './repoFilterBar.scss';

interface RepoFilterProps {
    isMobile: boolean;
}

const RepoFilterBar: React.FC<RepoFilterProps> = ({ isMobile }: RepoFilterProps) => {
    return isMobile ? (
        <div className="repo-filter-bar repo-filter-mobile">
            <div className="filter__top">
                <div className="filter__btns">
                    <button>
                        <i className="fas fa-tags"></i> Labels
                    </button>
                    <button>
                        <i className="fas fa-map-signs"></i> Milestones
                    </button>
                </div>
                <button className="btn-new-issue">New</button>
            </div>
            <div className="btn-input filter__bottom">
                <button>Filters</button>
                <input type="text" placeholder="is:issue is:open" />
            </div>
        </div>
    ) : (
        <div className="repo-filter-bar">
            <div className="btn-input bar-1">
                <button>Filters</button>
                <input type="text" placeholder="is:issue is:open" />
            </div>
            <div className="bar-2">
                <button>
                    <i className="fas fa-tags"></i> Labels
                </button>
                <button>
                    <i className="fas fa-map-signs"></i> Milestones
                </button>
            </div>
            <button className="btn-new-issue">New Issue</button>
        </div>
    );
};

export default RepoFilterBar;

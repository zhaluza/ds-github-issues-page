import React from 'react';
import './navbar.scss';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <i className="fab fa-github"></i>
                <input type="text" placeholder="Search or jump to..." />
                <a href="https://github.com/pulls">Pull requests</a>
                <a href="https://github.com/issues">Issues</a>
                <a href="https://github.com/marketplace">Marketplace</a>
                <a href="https://github.com/explore">Explore</a>
            </div>
            <div className="navbar__right">
                <i className="fas fa-bell"></i>

                <details>
                    <summary>
                        <i className="fas fa-plus"></i>
                    </summary>
                </details>
            </div>
        </div>
    );
};

export default Navbar;

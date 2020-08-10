import React, { Fragment, useState } from 'react';
import './navbar.scss';

interface NavbarProps {
    isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile }: NavbarProps) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return isMobile ? (
        <Fragment>
            <div className="navbar navbar-mobile">
                <i className="fas fa-bars" onClick={() => setMenuOpen((prev) => !prev)}></i>
                <i className="fab fa-github"></i>
                <i className="fas fa-bell"></i>
            </div>
            {menuOpen && (
                <div className="menu-stack">
                    <ul>
                        <li>
                            <input type="text" placeholder="Search GitHub" />
                        </li>
                        <li>
                            <a href="https://github.com/dashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="https://github.com/pulls">Pull requests</a>
                        </li>
                        <li>
                            <a href="https://github.com/issues">Issues</a>
                        </li>
                        <li>
                            <a href="https://github.com/marketplace">Marketplace</a>
                        </li>
                        <li>
                            <a href="https://github.com/explore">Explore</a>
                        </li>
                        <li>
                            <a href="https://github.com">Sign Out</a>
                        </li>
                    </ul>
                </div>
            )}
        </Fragment>
    ) : (
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
                        <i className="fas fa-caret-down"></i>
                    </summary>
                </details>
            </div>
        </div>
    );
};

export default Navbar;

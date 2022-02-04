import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
		<header className="header container">
			<nav className="nav  container-nav">
				<h1 className="nav__header">
					<Link to="/">STAR DB</Link>
				</h1>
				<ul className="nav-list">
					<li className="nav-list__item">
						<Link to="/people" className="nav-list__item-link">
							People
						</Link>
					</li>
					<li className="nav-list__item">
						<Link to="/starships" className="nav-list__item-link">
							Starships
						</Link>
					</li>
					<li className="nav-list__item">
						<Link to="/planets" className="nav-list__item-link">
							Planets
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

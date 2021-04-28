import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<div className='navbar'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/FunctionalComponent'>FunctionalComponent</Link>
				</li>
				<li>
					<Link to='/ClassComponent'>ClassComponent</Link>
				</li>
				<li>
					<Link to='/FetchApi'>FetchAPI</Link>
				</li>
				<li>
					<Link to='/Bootstrap'>Bootstrap</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;

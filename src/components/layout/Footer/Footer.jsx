import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<ul>
					<li>DZ © 2022</li>
					<li>-</li>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

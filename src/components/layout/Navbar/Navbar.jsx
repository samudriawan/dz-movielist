import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';
import './Navbar.scss';

export function Navbar(props) {
	const [searchInput, setSearchInput] = useState('');
	const searchBar = useRef(null);
	const header = useRef(null);
	const { onSearchClick } = props;

	function toggleMenuHandle() {
		// searchBar.current.classList.toggle('collapse');
		// header.current.classList.toggle('collapse');
		if (searchBar.current.classList.contains('collapse')) {
			searchBar.current.classList.remove('collapse');
			header.current.classList.remove('collapse');
			searchBar.current.children[0].children[0].blur();
		} else {
			searchBar.current.classList.add('collapse');
			header.current.classList.add('collapse');
			searchBar.current.children[0].children[0].focus();
		}
		// console.log(searchBar.current.children[0].children[0]);
	}

	return (
		<header className="nav-header" ref={header}>
			<nav className="navbar">
				<Link to={'/'} className="nav-brand">
					DZ Movie List
				</Link>
				<div className="navbar-toggler">
					<button
						className="toggler-btn white"
						aria-label="search"
						onClick={() => toggleMenuHandle()}
					>
						<HiSearch className="icon" />
					</button>
				</div>
				<ul className="nav-list">
					<li className="nav-item">
						<form
							onSubmit={(e) => onSearchClick(e, searchInput)}
							className="search-bar top"
						>
							<input
								type="text"
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
								placeholder="Search for movie..."
							/>
							<button type="submit" className="search" aria-label="search">
								<HiSearch size={'1.3rem'} />
							</button>
						</form>
					</li>
				</ul>
			</nav>
			<div className=" navbar-collapse" id="navbar-menu" ref={searchBar}>
				<form
					onSubmit={(e) => onSearchClick(e, searchInput)}
					className="search-bar"
				>
					<input
						type="text"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="Search for movie..."
					/>
					<button type="submit" className="search" aria-label="search">
						<HiSearch size={'1.3rem'} />
					</button>
				</form>
			</div>
		</header>
	);
}

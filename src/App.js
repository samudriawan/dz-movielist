import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { Home } from './components/pages';

function App() {
	const [fetchApi, setFetchApi] = useState({
		loading: false,
		movie: [],
		totalResults: 0,
	});
	const [searchText, setSearchText] = useState('avenger');
	const [page, setPage] = useState(1);
	const API_URL = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		fetchHandle();
	}, [searchText, page]);

	async function fetchHandle() {
		setFetchApi({ loading: true, movie: [], totalResults: 0 });
		let response = null;
		if (page > 1) {
			response = await fetch(`${API_URL}&s=${searchText}&page=${page}`).then((response) => response.json());
		} else {
			response = await fetch(`${API_URL}&s=${searchText}`).then((response) => response.json());
		}
		setFetchApi({
			loading: false,
			movie: response.Search,
			totalResults: response.totalResults,
		});
		// console.log(response.Search);
	}

	function searchHandle(e, searchText) {
		e.preventDefault();
		try {
			setSearchText(searchText);
			setPage(1);
			// fetchHandle();
			console.log(searchText);
		} catch (error) {
			console.log(error);
		}
	}

	function onPageClick(condition) {
		const maxPage = Math.ceil(fetchApi.totalResults / 10);
		if (condition === 'next') {
			if (maxPage === page) return;
			setPage(page + 1);
		}
		if (condition === 'prev') {
			if (page === 1) return;
			setPage(page - 1);
		}

		console.log(`onClick App.js: ${page}`);
		console.log(`onClick App.js: ${condition}`);
	}
	console.log(`page state App.js: ${page}`);
	console.log(`page state App.js: ${Math.ceil(fetchApi.totalResults / 10)}`);

	return (
		<Router basename="/dz-movielist">
			<Navbar onSearchClick={searchHandle} />
			<Routes>
				<Route path="/" element={<Home fetchState={fetchApi} searchText={searchText} onPageClick={onPageClick} />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

import React from 'react';
import MovieCard from '../../MovieCard';
import Pagination from '../../Pagination';
import './Home.scss';
// hardcoded testing data
// import { tenData } from '../../../data';

export function Home(props) {
	const { fetchState, onPageClick, searchText } = props;

	return (
		<main>
			<header className="header">
				<h2 className="title">Welcome to DZ Movie List!</h2>
			</header>
			<div className="home-content">
				<div className="latest-movie">
					<div className="row">
						<h4 className="search-header">Search Results for "{searchText}"</h4>
					</div>
					<div className="row">
						<Pagination onPageClick={onPageClick} />
					</div>

					{/* tenData.map((data, i) => ( */}
					<div className="row movie-section">{fetchState.loading || fetchState.movie === undefined || fetchState.movie.length === 0 ? <h4 className="loading">Loading...</h4> : fetchState.movie.map((data) => <MovieCard data={data} />)}</div>
					<div className="row">
						<Pagination onPageClick={onPageClick} />
					</div>
				</div>
			</div>
		</main>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
// hardcoded testing data
// import { tenData } from '../../../data';

export function Home(props) {
	const { fetchState, onPageClick, searchText } = props;

	return (
		<main>
			<header>
				<h2 className="title">Welcome to DZ Movie List!</h2>
			</header>
			<div className="home-content">
				<div className="latest-movie">
					<div className="row">
						<h4 className="search-header">Search Results for "{searchText}"</h4>
					</div>
					<div className="row">
						<ul className="pagination">
							<li className="pagination_list" onClick={() => onPageClick('prev')}>
								Previous
							</li>
							<li className="pagination_list" onClick={() => onPageClick('next')}>
								Next
							</li>
						</ul>
					</div>

					{/* tenData.map((data, i) => ( */}
					<div className="row movie-section">
						{fetchState.loading || fetchState.movie === undefined ? (
							<h4>Loading...</h4>
						) : (
							fetchState.movie.map((data, i) => (
								<div className="movie-wrap" key={i}>
									<Link to={'/'} className="movie-link">
										<figure>
											<img src={data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/400'} alt={data.Title} />
											<figcaption>
												<h4>{data.Title}</h4>
												<h4>{data.Year}</h4>
												<h4>{data.Type}</h4>
												{/* <span className="view-details-btn">View Details</span> */}
											</figcaption>
										</figure>
									</Link>
									<div className="movie-bottom">
										<Link
											to={`/movies/${data.Title.toLowerCase()
												.replace(/[^\w\s]/g, '')
												.replace(/\s/g, '-')}`}
											className="movie-title"
										>
											{data.Title}
										</Link>
										<div className="movie-year">{data.Year}</div>
										{/* <div className="movie-year">{data.imdbID}</div> */}
									</div>
								</div>
							))
						)}
					</div>
					<div className="row">
						<ul className="pagination">
							<li className="pagination_list" onClick={() => onPageClick('prev')}>
								Previous
							</li>
							<li className="pagination_list" onClick={() => onPageClick('next')}>
								Next
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}

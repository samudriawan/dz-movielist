import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './movies.scss';
// import { FaHeart } from 'react-icons/fa';

export function Movies() {
	const [movie, setMovie] = useState(null);
	const location = useLocation();
	let imdbId = location.state;
	const imdbUrl = `https://www.imdb.com/title/${imdbId}`;
	// console.log(imdbId);
	// console.log(movie);

	useEffect(() => {
		getMovie(imdbId);
	}, [imdbId]);

	const getMovie = async (imdb_id) => {
		const data = await fetch(
			`${process.env.REACT_APP_API_KEY}&i=${imdb_id}&plot=full`
		).then((res) => res.json());
		setMovie(data);
		// console.log(data);
	};

	return (
		<main>
			<div className="movie-container">
				{movie === null ? (
					<h4>Loading...</h4>
				) : (
					<>
						<section className="movie-header">
							<div className="movie-header_info">
								<h1>{movie.Title}</h1>
								<h2>{movie.Year}</h2>
								<h3>{movie.Genre.split(',').join(' / ')}</h3>
							</div>
							<div className="movie-header_poster">
								<img src={movie.Poster} alt={movie.Poster} />
								<div className="movie-rating">
									{/* <div className="movie-rating_row">
										<p>
											<FaHeart className="icon" style={{ margin: 0 }} /> Faves:
										</p>
										<span>12</span>
									</div> */}
									<div className="movie-rating_row">
										<a
											href={imdbUrl}
											target="_blank"
											title="IMDb Rating"
											rel="noopener noreferrer"
										>
											IMDb Rating
										</a>
										<span>{movie.imdbRating}</span>
									</div>
								</div>
							</div>
						</section>
						<section className="movie-body">
							<div id="synopsis">
								<h4>Plot Summary</h4>
								<p>{movie.Plot}</p>
							</div>
							<div id="crew">
								<div className="directors">
									<h3>Director</h3>
									<p className="list-cast">{movie.Director}</p>
								</div>
								<div className="actors">
									<h3>Top Cast</h3>
									{movie.Actors.split(',').map((actor, index) => (
										<div key={index}>
											<p className="list-cast">{actor}</p>
										</div>
									))}
								</div>
							</div>
						</section>
					</>
				)}
			</div>
		</main>
	);
}

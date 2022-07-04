import { Link } from 'react-router-dom';

function MovieCard({ data, key }) {
	return (
		<div className="movie-wrap" key={key}>
			<Link
				to={`/movies/${data.Title.toLowerCase()
					.replace(/[^\w\s]/g, '')
					.replace(/\s+/g, ' ')
					.replace(/\s/g, '-')}`}
				state={data.imdbID}
				className="movie-link"
			>
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
						.replace(/\s+/g, ' ')
						.replace(/\s/g, '-')}`}
					className="movie-title"
				>
					{data.Title}
				</Link>
				<div className="movie-year">{data.Year}</div>
				{/* <div className="movie-year">{data.imdbID}</div> */}
			</div>
		</div>
	);
}
export default MovieCard;

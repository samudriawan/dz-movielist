function Pagination({ onPageClick }) {
	return (
		<ul className="pagination">
			<li className="pagination_list" onClick={() => onPageClick('prev')}>
				Previous
			</li>
			<li className="pagination_list" onClick={() => onPageClick('next')}>
				Next
			</li>
		</ul>
	);
}
export default Pagination;

import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className='d-flex justify-content-center'>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='px-2 text-center'>
						<button onClick={() => paginate(number)}>{number}</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;

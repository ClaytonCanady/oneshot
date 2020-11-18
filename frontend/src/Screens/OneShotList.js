import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

import {  useState } from 'react';
import Pagination from '../components/Pagination';
import Rating from '../components/Rating';
const OneShotList = ({ oneShots }) => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(12);
	setPosts(oneShots);
	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		setPosts(oneShots);
	// 	};
	// 	fetchPosts();
	// }, [oneShots]);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<div className='mx-3'>
			<h1 className='text-center py-4'>One Shot Ideas</h1>
			<Row>
				{currentPosts.map((oneShot) => (
					<Col key={oneShot._id} sm={12} md={6} lg={4} xl={3}>
						<Card className='my-3 p-3 rounded'>
							<Link to={`/oneShot/${oneShot._id}`}>
								<Card.Body className='color-black'>
									<Link to={`/oneShot/${oneShot._id}`}>
										<Card.Title as='div'>
											<strong>{oneShot.name}</strong>
											<br />
											<strong>
												<Rating
													value={oneShot.rating}
													text={`${oneShot.numRating} reviews`}
												/>
											</strong>
										</Card.Title>
									</Link>
									<Card.Text as='div'>
										<p>
											{oneShot.desc.length < 150
												? oneShot.desc
												: oneShot.desc.substring(0, 150) + '...'}
										</p>
									</Card.Text>
								</Card.Body>
							</Link>
						</Card>
					</Col>
				))}
			</Row>
			<div className='text-center'>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={posts.length}
					paginate={paginate}
				/>
			</div>
		</div>
	);
};

export default OneShotList;

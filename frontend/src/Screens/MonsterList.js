import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import monsters from '../data/monsters'
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Rating from '../components/Rating';
const MonsterList = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(12);

	useEffect(() => {
		const fetchPosts = async () => {
			setPosts(monsters);
		};
		fetchPosts();
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<div className='mx-3'>
			<h1 className='text-center py-4'>HomeBrew Monsters</h1>
			<Row>
				{currentPosts.map((monster) => (
					<Col key={monster._id} sm={12} md={6} lg={4} xl={3}>
						<Card className='my-3 p-3 rounded'>
							<Link to={`/monster/${monster._id}`}>
								<Card.Body className='color-black'>
									<Link to={`/monster/${monster._id}`}>
										<Card.Title as='div'>
											<strong className='title'>{monster.name}</strong>
											<br />
											<strong>
												<Rating
													value={monster.rating}
													text={`${monster.numRating} reviews`}
												/>
											</strong>
										</Card.Title>
									</Link>
									<Card.Text as='div'>
										<p>
											{monster.desc.length < 150
												? monster.desc
												: monster.desc.substring(0, 150) + '...'}
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

export default MonsterList;

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import oneShots from '../oneShots';
const OneShotList = () => {
	return (
		<div className='mx-3'>
            <h1 className='text-center py-4'>One Shot Ideas</h1>
			<Row>
				{oneShots.map((oneShot) => (
					<Col key={oneShot._id} sm={12} md={6} lg={4} xl={3}>
						<Card className='my-3 p-3 rounded'>
							<Link to={`/oneShot/${oneShot._id}`}>
								<Card.Body className="color-black">
									<Link to={`/oneShot/${oneShot._id}`}>
										<Card.Title as='div'>
											<strong>{oneShot.name}</strong>
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
		</div>
	);
};

export default OneShotList;

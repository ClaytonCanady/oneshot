import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import oneShots from '../oneShots';
let username;
const HomeScreen = () => {
	// sort oneshots by their rating from high to low
	oneShots.sort((a, b) => (a.rating < b.rating ? 1 : -1));
	return (
		<div className='home px-3'>
			<h1 className='text-center pt-3'>
				{/* if username is set display user name otherwise Adventurer */}
				Welcome {username ? username : 'Adventurer'}!
			</h1>

			<Row className='pt-5'>
				<Col className=' text-center'>
					<ul>
						<h3>Top Five One Shots</h3>
						{/* take top 5 oneshots and display name as a link  */}
						{oneShots.slice(0, 5).map((oneShot) => (
							<Link to={`/oneshot/${oneShot._id}`}>
								<li key={oneShot._id}>{oneShot.name}</li>
							</Link>
						))}
					</ul>
				</Col>
				<Col className=' text-center'>
					<ul>
						<h3>Top Five Monsters</h3>
						{oneShots.slice(0, 5).map((oneShot) => (
							<Link to={`/oneshot/${oneShot._id}`}>
								<li>{oneShot.name}</li>
							</Link>
						))}
					</ul>
				</Col>
			</Row>
			<Row className='py-5'>
				<Col className=' text-center'>
					<ul>
						<h3>Top 5 Classes</h3>
						{oneShots.slice(0, 5).map((oneShot) => (
							<Link to={`/oneshot/${oneShot._id}`}>
								<li>{oneShot.name}</li>
							</Link>
						))}
					</ul>
				</Col>
				<Col className=' text-center'>
					<ul>
						<h3>Top 5 Forum Posts</h3>
						{oneShots.slice(0, 5).map((oneShot) => (
							<Link to={`/oneshot/${oneShot._id}`}>
								<li>{oneShot.name}</li>
							</Link>
						))}
					</ul>
				</Col>
			</Row>
		</div>
	);
};

export default HomeScreen;

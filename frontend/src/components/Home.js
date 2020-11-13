import React from 'react';
import { Col, Row } from 'react-bootstrap';
import oneShots from '../oneShots';
let username = 'Clayton';
const Home = () => {
	return (
		<div className='home px-3'>
			<h1 className='text-center pt-3'>
				Welcome {username ? username : 'Adventurer'}!
			</h1>

			<Row className='py-5'>
				<Col className=' text-center'>
					<ul>
						<h3>top 5 oneshots</h3>
						{oneShots.slice(0, 5).map((oneShot) => (
							<li>{oneShot.name}</li>
						))}
					</ul>
				</Col>
				<Col className=' text-center'>
					<ul>
						<h3>top 5 oneshots</h3>
						{oneShots.slice(0, 5).map((oneShot) => (
							<li>{oneShot.name}</li>
						))}
					</ul>
				</Col>
			</Row>
			<Row className='py-5'>
				<Col className=' text-center'>
					<ul>
						<h3>top 5 oneshots</h3>
						{oneShots.slice(0, 5).map((oneShot) => (
							<li>{oneShot.name}</li>
						))}
					</ul>
				</Col>
				<Col className=' text-center'>
					<ul>
						<h3>top 5 oneshots</h3>
						{oneShots.slice(0, 5).map((oneShot) => (
							<li>{oneShot.name}</li>
						))}
					</ul>
				</Col>
			</Row>
		</div>
	);
};

export default Home;

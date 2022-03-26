import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import oneShots from '../data/oneShots';
import monsters from '../data/monsters';
import classes from '../data/classes'
import campaigns from '../data/campaigns'
let username;
const HomeScreen = () => {
	// sort oneshots by their rating from high to low
	const sortedOneShots = oneShots.sort((a, b) =>
		a.rating + a.numRating * 0.1 < b.rating + b.numRating * 0.1 ? 1 : -1
	);
		const sortedMonsters = monsters.sort((a, b) =>
			a.rating + a.numRating * 0.1 < b.rating + b.numRating * 0.1 ? 1 : -1
		);
			const sortedClasses = classes.sort((a, b) =>
				a.rating + a.numRating * 0.1 < b.rating + b.numRating * 0.1 ? 1 : -1
			);
				const sortedCampaigns = campaigns.sort((a, b) =>
					a.rating + a.numRating * 0.1 < b.rating + b.numRating * 0.1 ? 1 : -1
				);
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
						{sortedOneShots.slice(0, 5).map((oneShot) => (
							<Link to={`/oneshot/${oneShot._id}`}>
								<li key={oneShot._id}>{oneShot.name}</li>
							</Link>
						))}
					</ul>
				</Col>
				<Col className=' text-center'>
					<ul>
						<h3>Top Five Monsters</h3>
						{sortedMonsters.slice(0, 5).map((monster) => (
							<Link to={`/monster/${monster._id}`}>
								<li>{monster.name}</li>
							</Link>
						))}
					</ul>
				</Col>
			</Row>
			<Row className='py-5'>
				<Col className=' text-center'>
					<ul>
						<h3>Top 5 Classes</h3>
						{sortedClasses.slice(0, 5).map((classIdea) => (
							<Link to={`/classidea/${classIdea._id}`}>
								<li>{classIdea.name}</li>
							</Link>
						))}
					</ul>
				</Col>
				<Col className=' text-center'>
					<ul>
						<h3>Top 5 Campaign Settings</h3>
						{sortedCampaigns.slice(0, 5).map((campaign) => (
							<Link to={`/campaign/${campaign._id}`}>
								<li>{campaign.name}</li>
							</Link>
						))}
					</ul>
				</Col>
			</Row>
		</div>
	);
};

export default HomeScreen;

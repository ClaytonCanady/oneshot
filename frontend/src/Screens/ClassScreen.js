import React from 'react';
import classes from '../data/classes';
const ClassScreen = (props) => {
	const classIdea = classes.find((a) => {
		return a._id === props.match.params.id;
	});
	return (
		<div>
			<h1 className='text-center py-4'>{classIdea.name}</h1>
			<p className='text-center px-5'>{classIdea.desc}</p>
		</div>
	);
};

export default ClassScreen;

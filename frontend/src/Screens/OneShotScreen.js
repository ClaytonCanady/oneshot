import React from 'react';
import oneShots from '../oneShots';
const OneShotScreen = (props) => {
	const oneShot = oneShots.find((a) => {
		return a._id === props.match.params.id;
	});
	return (
		<div>
			<h1 className='text-center py-4'>{oneShot.name}</h1>
			<p className='text-center px-5'>{oneShot.desc}</p>
		</div>
	);
};

export default OneShotScreen;

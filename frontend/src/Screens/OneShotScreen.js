import React from 'react';

const OneShotScreen = (props, {oneShots}) => {
	const oneShot = oneShots.find((a) => {
		return a._id === props.match.params.id;
	});
	console.log(props);
	return (
		<div>
			<h1 className='text-center py-4'>{oneShot.name}</h1>
			<p className='text-center px-5'>{oneShot.desc}</p>
		</div>
	);
};

export default OneShotScreen;

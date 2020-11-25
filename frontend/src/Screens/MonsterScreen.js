import React from 'react';
import monsters from '../data/monsters';
const MonsterScreen = (props) => {
	const monster = monsters.find((a) => {
		return a._id === props.match.params.id;
	});
	return (
		<div>
			<h1 className='text-center py-4'>{monster.name}</h1>
			<p className='text-center px-5'>{monster.desc}</p>
		</div>
	);
};

export default MonsterScreen;

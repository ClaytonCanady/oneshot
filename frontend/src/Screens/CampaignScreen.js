import React from 'react';
import campaigns from '../data/campaigns';
const CampaignScreen = (props) => {
	const campaignIdea = campaigns.find((a) => {
		return a._id === props.match.params.id;
	});
	return (
		<div>
			<h1 className='text-center py-4'>{campaignIdea.name}</h1>
			<p className='text-center px-5'>{campaignIdea.desc}</p>
		</div>
	);
};

export default CampaignScreen;
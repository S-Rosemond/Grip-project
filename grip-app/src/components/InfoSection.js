import React from 'react';
import FoodCard from './InfoCards/FoodCard';
import InfoCard from './InfoCards/InfoCard';
import Branddish from '../assets/Home/Brand-dish.jpg';

const InfoSection = props => (
	<div>
		<FoodCard image={Branddish} />
		<InfoCard />
	</div>
);

export default InfoSection;

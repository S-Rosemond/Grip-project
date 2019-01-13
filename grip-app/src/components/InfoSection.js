import React, { Fragment } from 'react';
import FoodCard from './InfoCards/FoodCard';
import InfoCard from './InfoCards/InfoCard';
import Branddish from '../assets/Home/Brand-dish.jpg';

const InfoSection = props => (
	<Fragment>
		<div className="app-body">
			<FoodCard
				image={Branddish}
				title="Fresh Rolls"
				name="Wild Tiger Thai Restaurant and Bar"
				main="1825 SE 164th AVE Suite 101 VanCOUVER, WA 98683"
			/>
			<InfoCard heading="360-882-8887" info="Give us a call when you are ready to order for pick up" />
		</div>
	</Fragment>
);

export default InfoSection;

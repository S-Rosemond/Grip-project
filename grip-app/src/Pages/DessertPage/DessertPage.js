import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import Cart from '../../components/Cart/Cart';
import CardContainer from '../../components/Card/CardContainer';

import ImageCard from '../../components/Card/ImageCard';

export default function Dessert(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<CardContainer banner="Desserts" cardlist={<ImageCard list={value.desserts} />} />
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

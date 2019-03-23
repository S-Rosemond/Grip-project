import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import Cart, { CartListing } from '../Cart/Cart';

export default function Dessert(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<Cart banner="Desserts" cartlist={<CartListing list={value.desserts} />} />
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

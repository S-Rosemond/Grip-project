import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import Cart from '../../components/Cart/Cart';
import { CartListing } from './../../components/Cart/CartListing';

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

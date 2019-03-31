import React from 'react';
import { ContextConsumer } from '../../context/Context';
import Cart from '../../components/Cart/Cart';
import { CartListing } from './../../components/Cart/CartListing';
import { TabContainer } from './../../components/Tabs/Tabs';

export default function Dessert() {
	return (
		<ContextConsumer>
			{value => {
				return (
					<TabContainer>
						<Cart banner="Desserts" cartlist={<CartListing list={value.desserts} />} />
					</TabContainer>
				);
			}}
		</ContextConsumer>
	);
}

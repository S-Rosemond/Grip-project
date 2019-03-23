import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import Cart, { CartListing } from './../Cart/Cart';

import Tabs from '../Tabs/Tabs';

export default function Beverages(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<Tabs
							One="Beverages"
							Two="Beer"
							Three="House Whine"
							Four="White Whine"
							Five="Red Whine"
							tabOne={<Cart banner="Beverages" cartlist={<CartListing list={value.drinks} />} />}
							tabTwo={<Cart banner="Beer" cartlist={<CartListing list={value.beer} />} />}
							tabThree={<Cart banner="House Whine" cartlist={<CartListing list={value.house_whine} />} />}
							tabFour={<Cart banner="White Whine" cartlist={<CartListing list={value.white_whine} />} />}
							tabFive={<Cart banner="Red Whine" cartlist={<CartListing list={value.red_whine} />} />}
						/>
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

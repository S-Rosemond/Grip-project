import React from 'react';
import { ContextConsumer } from '../../context/Context';
import Tabs from '../../components/Tabs/Tabs';
import Cart from '../../components/Cart/Cart';
import { CartListing } from '../../components/Cart/CartListing';

export default function Menu(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<React.Fragment>
						<Tabs
							One="Appetizers"
							Two="Soup"
							Three="Salads"
							Four="Fried Rice"
							Five="Curry"
							Six="Noodles"
							Seven="Specials"
							tabOne={<Cart banner="Appetizers" cartlist={<CartListing list={value.appetizers} />} />}
							tabTwo={
								<Cart
									banner="Soup"
									cartlist={<CartListing list={value.soup} />}
									tabs={
										<Tabs
											One="Noodle Soup"
											Two="Wonton Soup"
											tabOne={
												<Cart
													banner="Noodle Soup"
													cartlist={<CartListing list={value.noodle_soup} />}
												/>
											}
											tabTwo={
												<Cart
													banner="Wonton Soup"
													cartlist={<CartListing list={value.wontonSoup} />}
												/>
											}
										/>
									}
								/>
							}
							tabThree={<Cart banner="Salads" cartlist={<CartListing list={value.salads} />} />}
							tabFour={
								<Cart
									banner="Fried Rice"
									cart={
										<Cart banner="Stir-Fried" cartlist={<CartListing list={value.stir_fried} />} />
									}
									cartlist={<CartListing list={value.fried_rice} />}
								/>
							}
							tabFive={
								<Cart
									banner="Curry"
									cartlist={<CartListing list={value.curries} />}
									cart={
										<Cart banner="Special" cartlist={<CartListing list={value.pumpkin_curry} />} />
									}
								/>
							}
							tabSix={<Cart banner="Noodles" cartlist={<CartListing list={value.noodles} />} />}
							tabSeven={
								<Cart
									banner="Specials"
									cart={<Cart banner="Side" cartlist={<CartListing list={value.sides} />} />}
									cartlist={<CartListing list={value.specials} />}
								/>
							}
						/>
					</React.Fragment>
				);
			}}
		</ContextConsumer>
	);
}

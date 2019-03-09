import React, { Component } from 'react';
import { Home, LocalCafe, LocalBar, RestaurantMenu } from '@material-ui/icons/';
import {
	appetizers,
	curries,
	fried_rice,
	noodles,
	noodle_soup,
	pumpkin_curry,
	sides,
	soup,
	specials,
	stir_fried,
	wontonSoup,
	salads
} from '../data/foods-data';

import { happy_appetizers } from './../data/happy-hour';
import { beer, desserts, drinks, house_whine, white_whine, red_whine } from './../data/beverage-data';
import {
	sapporo_beer_image,
	whine_image,
	mango_dessert_image,
	duck_curry,
	drunken_noodle,
	larb,
	panang,
	khao_soi,
	pad_thai,
	chicken_cashew,
	pumpkin_curr,
	tom_yum,
	pumpkin_shrimp
} from '../data/image-data';

const ContextProvider = React.createContext();

class ContextScope extends Component {
	state = {
		menuListArray: ['Home', 'Menu', 'Dessert', 'Beverages'],
		svgIcons: [<Home />, <RestaurantMenu />, <LocalCafe />, <LocalBar />],
		appetizers,
		curries,
		fried_rice,
		noodle_soup,
		pumpkin_curry,
		sides,
		soup,
		specials,
		stir_fried,
		wontonSoup,
		salads,
		beer,
		desserts,
		drinks,
		house_whine,
		white_whine,
		red_whine,
		happy_appetizers,
		sapporo_beer_image,
		whine_image,
		mango_dessert_image,

		duck_curry,
		drunken_noodle,
		larb,
		panang,
		khao_soi,
		noodles,
		pad_thai,
		chicken_cashew,
		pumpkin_curr,
		pumpkin_shrimp,
		tom_yum
	};

	render() {
		return (
			<ContextProvider.Provider
				value={{
					...this.state
				}}
			>
				{this.props.children}
			</ContextProvider.Provider>
		);
	}
}

const ContextConsumer = ContextProvider.Consumer;

export { ContextScope, ContextConsumer };

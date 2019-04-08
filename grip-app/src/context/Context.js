import React, { Component } from 'react';
import { Home, LocalCafe, LocalBar, RestaurantMenu, SentimentVerySatisfied } from '@material-ui/icons/';
import {
	appetizers,
	curries,
	fried_rice,
	noodles,
	sides,
	soup,
	specials,
	stir_fried,
	salads
} from '../data/foods-data';

import { happy_appetizers, happy_drinks } from './../data/happy-hour';
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
	pumpkin_shrimp,
	egg_rolls,
	drunk_orig,
	dessert_galore
} from '../data/image-data';

const ContextProvider = React.createContext();

class ContextScope extends Component {
	state = {
		menuListArray: ['Home', 'Menu', 'Dessert', 'Beverages', 'Happy Hours'],
		svgIcons: [
			<Home style={{ color: '#ed3d02' }} />,
			<RestaurantMenu style={{ color: '#ff8400' }} />,
			<LocalCafe style={{ color: '#7B3F00' }} />,
			<LocalBar style={{ color: '#da4444' }} />,
			<SentimentVerySatisfied style={{ color: '#ff8400' }} />
		],
		appetizers,
		curries,
		fried_rice,
		sides,
		soup,
		specials,
		stir_fried,
		salads,
		beer,
		desserts,
		drinks,
		house_whine,
		white_whine,
		red_whine,
		happy_appetizers,
		happy_drinks,
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
		tom_yum,
		egg_rolls,
		drunk_orig,
		dessert_galore
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

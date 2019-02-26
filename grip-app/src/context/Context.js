import React, { Component } from 'react';
import { Home, LocalCafe, LocalBar, RestaurantMenu } from '@material-ui/icons/';
import {
	appetizers,
	curries,
	fried_rice,
	noodle_soup,
	pumpkin_curry,
	sides,
	soup,
	soup_choice,
	soup_choices,
	specials,
	stir_fried,
	wontonSoup,
	salads
} from '../data/foods-data';

import { happy_appetizers } from './../data/happy-hour';
import { beer, desserts, drinks, house_whine, white_whine, red_whine } from './../data/beverage-data';
import { appetizer_images, appetizer_sub_images, dessert_images, whine_image, beer_image } from '../data/image-data';

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
		soup_choice,
		soup_choices,
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
		appetizer_images,
		appetizer_sub_images,
		dessert_images,
		whine_image,
		beer_image
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

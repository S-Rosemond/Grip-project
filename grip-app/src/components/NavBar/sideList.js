import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, ListItemIcon, ListItemText, MenuList, MenuItem } from '@material-ui/core/';

import { Home, LocalCafe, LocalBar, RestaurantMenu } from '@material-ui/icons/';
import uuidv4 from 'uuid';

export const SideBar = props => (
	<MenuList>
		{['Home', 'Menu', 'Dessert', 'Beverages'].map((text, index) => {
			const svgIcons = [<Home />, <RestaurantMenu />, <LocalCafe />, <LocalBar />];
			const ids = { id: uuidv4() };
			return (
				<div key={ids.id}>
					<MenuItem component={Link} to={text} key={ids.id} onKeyDown={props.handleDrawerToggle}>
						<ListItemIcon key={ids.id}>{svgIcons[index]}</ListItemIcon>
						<ListItemText primary={text} />
					</MenuItem>
					<Divider />
				</div>
			);
		})}
	</MenuList>
);

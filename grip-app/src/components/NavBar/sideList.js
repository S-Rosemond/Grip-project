import React from 'react';

import { Link } from 'react-router-dom';

import { Button, Divider, ListItemIcon, ListItemText, MenuList, MenuItem } from '@material-ui/core/';

import { Home, LocalCafe, LocalBar, RestaurantMenu } from '@material-ui/icons/';

import uuidv4 from 'uuid';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	buttons: {
		color: '#fff',
		backgroundColor: '#ff8400',
		margin: '0 5px'
	}
}));
const ids = { id: uuidv4() };
const menuListArray = ['Home', 'Menu', 'Dessert', 'Beverages'];

export const ButtonLinks = props => {
	const classes = useStyles();

	return menuListArray.map(text => (
		<Button key={ids.id} className={classes.buttons} component={Link} to={text}>
			{text}
		</Button>
	));
};

export const SideBar = props => (
	<MenuList>
		{menuListArray.map((text, index) => {
			const svgIcons = [<Home />, <RestaurantMenu />, <LocalCafe />, <LocalBar />];

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

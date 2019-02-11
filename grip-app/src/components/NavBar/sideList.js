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

const menuListArray = ['Home', 'Menu', 'Dessert', 'Beverages'];

export const ButtonLinks = () => {
	const classes = useStyles();

	return menuListArray.map((text, index) => (
		<Button key={uuidv4()} className={classes.buttons} component={Link} to={index === 0 ? '/' : text}>
			{text}
		</Button>
	));
};

export const SideBar = props => (
	<MenuList>
		{menuListArray.map((text, index) => {
			const svgIcons = [<Home />, <RestaurantMenu />, <LocalCafe />, <LocalBar />];
			let { open, handleDrawerToggle } = props;

			return (
				<div key={uuidv4()}>
					<MenuItem
						component={Link}
						to={index === 0 ? '/' : text}
						key={uuidv4()}
						onKeyDown={handleDrawerToggle}
						onClick={handleDrawerToggle}
						tabIndex={0}
					>
						<ListItemIcon key={uuidv4()}>{svgIcons[index]}</ListItemIcon>
						<ListItemText primary={text} />
					</MenuItem>
					<Divider />
				</div>
			);
		})}
	</MenuList>
);

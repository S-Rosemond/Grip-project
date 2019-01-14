import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Transition } from 'react-spring';
import MenuBar from './NavBarMenu/MenuBar';

const styles = {
	root: {
		flexGrow: 1
	}
};

const SimpleAppBar = props => {
	// console.log(props);
	const { classes, buttonToggle } = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default" style={{ backgroundColor: '#202020' }} id="app-bar">
				<Toolbar>
					<Typography variant="h6" color="inherit" id="brand">
						Wild Tiger Thai Restaurant and Bar
					</Typography>

					<IconButton className={classes.menuButton} color="primary" aria-label="Menu" onClick={buttonToggle}>
						<MenuIcon />
					</IconButton>
				</Toolbar>

				<MenuBar buttonState={props.buttonState} />
			</AppBar>
		</div>
	);
};

SimpleAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);

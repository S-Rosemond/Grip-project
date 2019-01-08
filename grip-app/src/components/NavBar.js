import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuBar from './NavBarMenu/MenuBar';

const styles = {
	root: {
		flexGrow: 1
	}
};

const SimpleAppBar = props => {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default" style={{ backgroundColor: '#202020' }} id="app-bar">
				<Toolbar>
					<Typography variant="h6" color="inherit" id="brand">
						Wild Tiger Thai Restaurant and Bar
					</Typography>
				</Toolbar>
				<MenuBar />
			</AppBar>
		</div>
	);
};

SimpleAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);

import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import CssBaseline from '@material-ui/core/CssBaseline';

import {
	AppBar,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	SwipeableDrawer,
	Toolbar,
	Typography,
	withStyles
} from '@material-ui/core/';
import { Close, Menu } from '@material-ui/icons/';

import { SideBar } from './sideList';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		backgroundColor: '#da4444',
		display: 'flex',
		alignItems: 'center',
		padding: '0 ',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
		height: '62px'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 4,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
});

class PersistentDrawerLeft extends Component {
	state = {
		open: false
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<Hidden smUp>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerOpen}
								className={classNames(classes.menuButton, open && classes.hide)}
							>
								<Menu />
							</IconButton>
						</Hidden>
						<Typography variant="h6" color="secondary" style={{ fontFamily: 'ultra', padding: '15px' }}>
							WILD TIGER THAI
						</Typography>
					</Toolbar>
				</AppBar>

				<SwipeableDrawer
					className={classes.drawer}
					variant="temporary"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
					onOpen={this.handleDrawerOpen}
					onClose={this.handleDrawerClose}
				>
					<div className={classes.drawerHeader}>
						<IconButton onKeyDown={this.handleDrawerClose} onClick={this.handleDrawerClose}>
							{theme.direction === 'ltr' && <Close />}
						</IconButton>
					</div>
					<Divider />
					<SideBar />
				</SwipeableDrawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				/>
			</div>
		);
	}
}

PersistentDrawerLeft.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Toolbar, List, Typography, Divider, Hidden, IconButton, ListItem } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Close, Home, RestaurantMenu, LocalCafe, LocalBar } from '@material-ui/icons/';
import uuidv4 from 'uuid';

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
		padding: theme.spacing.unit * 3,
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

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}
class PersistentDrawerLeft extends React.Component {
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
								<MenuIcon />
							</IconButton>
						</Hidden>
						<Typography variant="h6" color="secondary" style={{ fontFamily: 'ultra', padding: '15px' }}>
							WILD TIGER THAI
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === 'ltr' && <Close />}
						</IconButton>
					</div>
					{['Home', 'Menu', 'Dessert', 'Beverages'].map((text, index) => {
						const svgIcons = [<Home />, <RestaurantMenu />, <LocalCafe />, <LocalBar />];
						const ids = { id: uuidv4() };
						return (
							<Fragment key={ids.id}>
								<Divider />
								<ListItemLink href={`/${text}`}>
									<List key={ids.id}>
										<ListItem key={ids.id}>
											<ListItemIcon key={ids.id}>{svgIcons[index]}</ListItemIcon>
											<ListItemText primary={text} />
										</ListItem>
									</List>
								</ListItemLink>
							</Fragment>
						);
					})}
					<Divider />
					<List />
				</Drawer>
			</div>
		);
	}
}

PersistentDrawerLeft.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);

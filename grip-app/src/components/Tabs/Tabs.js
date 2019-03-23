import React from 'react';
import { ContextConsumer } from '../../context/Context';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Cart, { CartListing } from './../Cart/Cart';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		width: '100%',

		backgroundColor: '#fff'
	}
}));

function ScrollableTabsButtonAuto(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	const widthVar = Boolean(window.innerWidth > 762);

	return (
		<ContextConsumer>
			{context => {
				return (
					<div className={classes.root}>
						<AppBar position="static" color="default">
							<Tabs
								value={value}
								onChange={handleChange}
								indicatorColor="secondary"
								textColor="secondary"
								variant={widthVar ? null : 'scrollable'}
								scrollButtons={widthVar ? null : 'on'}
								centered={widthVar ? true : null}
							>
								<Tab label="Beverages" />
								<Tab label="Beer" />
								<Tab label="House Whine" />
								<Tab label="Item Four" />
								<Tab label="Item Five" />
								<Tab label="Item Six" />
								<Tab label="Item Seven" />
							</Tabs>
						</AppBar>
						{value === 0 && (
							<TabContainer>
								<Cart banner="Beverages" cartlist={<CartListing list={context.drinks} />} />
							</TabContainer>
						)}
						{value === 1 && (
							<TabContainer>
								<Cart banner="Beer" cartlist={<CartListing list={context.beer} />} />
							</TabContainer>
						)}
						{value === 2 && (
							<TabContainer>
								<Cart banner="Drinks" cartlist={<CartListing list={context.house_whine} />} />
							</TabContainer>
						)}
						{value === 3 && <TabContainer>Item Four</TabContainer>}
						{value === 4 && <TabContainer>Item Five</TabContainer>}
						{value === 5 && <TabContainer>Item Six</TabContainer>}
						{value === 6 && <TabContainer>Item Seven</TabContainer>}
					</div>
				);
			}}
		</ContextConsumer>
	);
}

export default ScrollableTabsButtonAuto;

import React from 'react';
import { ContextConsumer } from '../../context/Context';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
								<Tab label={props.One || 'Item One'} />

								{props.Two && <Tab label={props.Two || 'Item Two'} />}

								{props.Three && <Tab label={props.Three || 'Item Three'} />}

								{props.Four && <Tab label={props.Four || 'Item Four'} />}

								{props.Five && <Tab label={props.Five || 'Item Five'} />}

								{props.Six && <Tab label={props.Six || 'Item Six'} />}

								{props.Seven && <Tab label={props.Seven || 'Item Seven'} />}
							</Tabs>
						</AppBar>
						{value === 0 && <TabContainer>{props.tabOne}</TabContainer>}
						{value === 1 && <TabContainer>{props.tabTwo}</TabContainer>}
						{value === 2 && <TabContainer>{props.tabThree}</TabContainer>}
						{value === 3 && <TabContainer>{props.tabFour}</TabContainer>}
						{value === 4 && <TabContainer>{props.tabFive}</TabContainer>}
						{value === 5 && <TabContainer>{props.tabSix}</TabContainer>}

						{props.tabSeven && value === 6 && <TabContainer>{props.tabSeven}</TabContainer>}
					</div>
				);
			}}
		</ContextConsumer>
	);
}

export default ScrollableTabsButtonAuto;

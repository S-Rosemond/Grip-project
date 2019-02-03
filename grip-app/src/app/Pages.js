import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import HomePage from './../components/HomePage';
import Default from './../components/Default';

class Pages extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Switch>
					<Route path="/Home" component={HomePage} />
					<Route component={Default} />
				</Switch>
			</Fragment>
		);
	}
}
export default Pages;

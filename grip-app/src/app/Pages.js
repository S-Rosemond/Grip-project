import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import HomePage from './../components/HomePage';
import Default from './../components/Default';
import TempNavBar from '../components/NavBar/TempNavBar';

class Pages extends Component {
	render() {
		return (
			<Fragment>
				<TempNavBar />
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route component={Default} />
				</Switch>
			</Fragment>
		);
	}
}
export default Pages;

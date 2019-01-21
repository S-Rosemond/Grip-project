import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import HomePage from './../components/HomePage';

class Pages extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Switch>
					<Route path="/" component={HomePage} exact />
				</Switch>
			</Fragment>
		);
	}
}
export default Pages;

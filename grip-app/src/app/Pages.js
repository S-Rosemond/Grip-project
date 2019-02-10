import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import HomePage from './../components/HomePage';
import NotFound from './../components/NotFound';

class Pages extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		);
	}
}
export default Pages;

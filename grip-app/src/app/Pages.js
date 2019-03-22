import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import HomePage from './../components/Home/HomePage';
import NotFound from './../components/NotFound';
import DessertPage from '../components/Dessert/DessertPage';
import BeveragesPage from '../components/Beverage/BeveragesPage';
import MenuPage from '../components/Menu/MenuPage';
import HappyHours from '../components/HappyHour/HappyHours';

class Pages extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />

				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route path="/Dessert" component={DessertPage} />
					<Route path="/Beverages" component={BeveragesPage} />
					<Route path="/Menu" component={MenuPage} />
					<Route path="/Happy Hours" component={HappyHours} />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		);
	}
}

export default Pages;

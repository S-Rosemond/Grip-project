import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import NotFound from '../Pages/NotFound';
import HomePage from '../Pages/HomePage/HomePage';
import MenuPage from '../Pages/MenuPage/MenuPage';
import DessertPage from '../Pages/DessertPage/DessertPage';
import BeveragesPage from '../Pages/BeveragePage/BeveragesPage';
import HappyHours from '../Pages/HappyHourPage/HappyHours';

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

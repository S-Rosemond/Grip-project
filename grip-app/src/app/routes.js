import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../layout/homepage/Home';

const Layout = () => {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
	);
};

export default Layout;

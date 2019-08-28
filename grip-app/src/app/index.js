import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './routes';

const index = () => {
	return (
		<Router>
			<Layout />
		</Router>
	);
};

export default index;

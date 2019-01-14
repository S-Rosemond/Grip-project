import React, { Component, Fragment } from 'react';
import FirstPage from './FirstPage';
import '../styles/App.scss';

export default class App extends Component {
	// changePage = () => {
	// 	const { dir } = this.state;
	// 	this.setState({
	// 		dir
	// 	});
	// };

	render() {
		// const { dir } = this.state;

		return (
			<Fragment>
				<FirstPage changePage={this.changePage} showButton={this.showButton} />
			</Fragment>
		);
	}
}

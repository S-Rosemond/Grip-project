import React, { Component, Fragment } from 'react';
import FirstPage from './FirstPage';
import '../styles/App.scss';

export default class App extends Component {
	state = {
		dir: 0
	};

	changePage = () => {
		const { dir } = this.state;
		this.setState({
			dir
		});
	};

	render() {
		const { dir } = this.state;

		switch (dir) {
			default:
				return (
					<Fragment>
						<FirstPage changePage={this.changePage} handleChange={this.handleChange} />
					</Fragment>
				);
		}
	}
}

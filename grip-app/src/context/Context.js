import React, { Component } from 'react';
import { appetizers, soup, wontonSoup, salads } from '../data/foods-data';

const ContextProvider = React.createContext();

class ContextScope extends Component {
	state = {
		appetizers,
		soup,
		wontonSoup,
		salads
	};

	render() {
		return (
			<ContextProvider.Provider
				value={{
					...this.state
				}}
			>
				{this.props.children}
			</ContextProvider.Provider>
		);
	}
}

const ContextConsumer = ContextProvider.Consumer;

export { ContextScope, ContextConsumer };

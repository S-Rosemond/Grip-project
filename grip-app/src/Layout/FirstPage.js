import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import InfoSection from '../components/InfoSection';

class FirstPage extends Component {
	state = {
		buttonDisplay: false
	};

	showButton = () => {
		this.setState(currentState => (currentState.buttonDisplay = !currentState.buttonDisplay));
	};

	render() {
		return (
			<div>
				<NavBar buttonToggle={this.showButton} buttonState={this.state.buttonDisplay} />
				<InfoSection />
			</div>
		);
	}
}

export default FirstPage;

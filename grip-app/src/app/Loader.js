import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = Loadable({
	loader: () => import('./Pages'),
	loading: Loading
});

export default class Loader extends Component {
	render() {
		return <LoadableComponent />;
	}
}

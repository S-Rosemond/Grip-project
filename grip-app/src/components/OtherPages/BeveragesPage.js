import React from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';

export default function Beverages(props) {
	return (
		<ContextConsumer>
			{value => {
				return <NewPage location={props.location.pathname} />;
			}}
		</ContextConsumer>
	);
}

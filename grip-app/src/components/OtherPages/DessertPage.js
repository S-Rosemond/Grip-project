import React from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';

export default function Dessert(props) {
	return (
		<ContextConsumer>
			{value => {
				return <NewPage menu={value.desserts} location={props.location.pathname} />;
			}}
		</ContextConsumer>
	);
}

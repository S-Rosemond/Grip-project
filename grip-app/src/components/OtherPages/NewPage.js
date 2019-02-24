import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
export default function NewPage(props) {
	let route = props.location;
	const regex = /^\/(\w+)/gi;

	let banner = regex.exec(route);

	console.log('Test:', banner[1]); //answer
	return (
		<Fragment>
			<ContextConsumer>
				{value => {
					return (
						<div style={{ textAlign: 'center' }}>
							<h1>{banner[1]}</h1>
							<hr />
						</div>
					);
				}}
			</ContextConsumer>
		</Fragment>
	);
}

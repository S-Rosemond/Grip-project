import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';

import Tabs from '../Tabs/Tabs';

export default function Beverages(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<Tabs />
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

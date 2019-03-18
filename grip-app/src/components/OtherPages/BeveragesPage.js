import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';

export default function Beverages(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<NewPage
							menu={value.house_whine}
							location={props.location.pathname}
							display={value.whine_image}
						/>
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

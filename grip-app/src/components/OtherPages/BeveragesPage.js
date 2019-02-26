import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';

export default function Beverages(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<NewPage menu={value.drinks} location={props.location.pathname} />

						<NewPage
							menu={value.beer}
							location={props.location.pathname}
							display={value.sapporo_beer_image}
						/>

						<NewPage
							menu={value.house_whine}
							location={props.location.pathname}
							display={value.whine_image}
						/>
						<NewPage menu={value.white_whine} location={props.location.pathname} headline={'White Whine'} />
						<NewPage menu={value.red_whine} location={props.location.pathname} headline={'Red Whine'} />
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

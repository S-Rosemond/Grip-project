import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';
import ImagesSupplier from './NewPageImageSupplier/ImagesSupplier';

export default function Dessert(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<NewPage menu={value.desserts} location={props.location.pathname} />
						<div style={{ textAlign: 'center' }}>
							<ImagesSupplier supplydrop={value.mango_dessert_image} />
						</div>
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

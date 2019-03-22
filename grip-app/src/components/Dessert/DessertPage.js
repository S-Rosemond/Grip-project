import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from '../OtherPages/NewPage';
import ImagesSupplier from '../OtherPages/NewPageImageSupplier/ImagesSupplier';

export default function Dessert(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<NewPage menu={value.desserts} location={props.location.pathname} />
						<div style={{ textAlign: 'center' }}>
							<ImagesSupplier supplydrop={value.dessert_galore} />
						</div>
						<NewPage menu={value.sides} headline="Sides" location={props.location.pathname} />
						<div style={{ textAlign: 'center' }}>
							<ImagesSupplier supplydrop={value.mango_dessert_image} />
						</div>
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

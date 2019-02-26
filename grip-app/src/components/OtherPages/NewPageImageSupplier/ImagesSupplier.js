import React, { Fragment } from 'react';

export default function ImagesSupplier(props) {
	return (
		<Fragment>
			{<img style={{ width: 270 }} src={props.supplydrop[0].image} alt={props.supplydrop[0].title} />}
		</Fragment>
	);
}

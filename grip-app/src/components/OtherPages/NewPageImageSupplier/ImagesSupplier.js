import React, { Fragment } from 'react';

export default function ImagesSupplier(props) {
	console.log(props.screensize);
	console.log(props);
	console.log(props.supplydrop);
	return (
		<Fragment>
			{props.screensize < 1300 ? (
				<img style={{ width: 200 }} src={props.supplydrop[0].image} alt={props.supplydrop[0].title} />
			) : (
				props.supplydrop.map(images => (
					<img key={images.title} style={{ width: 200 }} src={images.image} alt={images.title} />
				))
			)}
		</Fragment>
	);
}

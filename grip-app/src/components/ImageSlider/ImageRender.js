import React from 'react';

//object fit scale down and cover both look good but with cover everything symmetrical
export const imageLayout = {
	height: 350,
	width: '100%',
	justifySelf: 'center',
	objectFit: 'cover',
	borderRadius: '0.2em'
};

export default function ImageRender(props) {
	return (
		<React.Fragment>
			<img style={imageLayout} src={props.image} alt={props.title} />
		</React.Fragment>
	);
}

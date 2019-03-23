import React from 'react';

export default function ImageRender(props) {
	return (
		<React.Fragment>
			<img style={{ width: 150, justifySelf: 'center' }} src={props.image} alt={props.title} />
		</React.Fragment>
	);
}

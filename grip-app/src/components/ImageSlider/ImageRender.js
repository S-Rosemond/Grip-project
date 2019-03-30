import React from 'react';

export default function ImageRender(props) {
	return (
		<React.Fragment>
			<img style={{ height: 350, width: 350, justifySelf: 'center' }} src={props.image} alt={props.title} />
		</React.Fragment>
	);
}

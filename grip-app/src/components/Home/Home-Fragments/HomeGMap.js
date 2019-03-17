import React, { Fragment } from 'react';

export default function HomeGMap(props) {
	return (
		<Fragment>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<iframe
					title="Google map Wild Tiger"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.8552942364918!2d-122.50451204848707!3d45.60691597900033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495bb495938b5b7%3A0xa3e862fb601c0350!2sWild+Tiger!5e1!3m2!1sen!2sus!4v1552859901702"
					allowtransparency="true"
					width="80%"
					height="450"
					frameBorder="1"
					style={{ border: 0 }}
					allowFullscreen="true"
				/>
			</div>
		</Fragment>
	);
}

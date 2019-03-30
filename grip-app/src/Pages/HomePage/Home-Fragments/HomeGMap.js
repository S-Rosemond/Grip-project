import React, { Fragment, useState, useEffect } from 'react';

export default function HomeGMap() {
	const [state, setState] = useState({
		screenWidth: window.innerWidth
	});

	useEffect(() => {
		setState({ screenWidth: window.innerWidth });
	});

	return (
		<Fragment>
			{state.screenWidth > 765 ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<iframe
						title="Google map Wild Tiger"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11164.742017885816!2d-122.502318!3d45.606916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3e862fb601c0350!2sWild+Tiger!5e0!3m2!1sen!2sus!4v1553274313873"
						allowtransparency="true"
						width="80%"
						height="450"
						frameBorder="1"
						style={{ border: 0 }}
					/>
				</div>
			) : (
				<iframe
					title="Google map Wild Tiger"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11164.742017885816!2d-122.502318!3d45.606916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3e862fb601c0350!2sWild+Tiger!5e0!3m2!1sen!2sus!4v1553274313873"
					allowtransparency="true"
					width="100%"
					height="250"
					frameBorder="1"
					style={{ border: 0 }}
				/>
			)}
		</Fragment>
	);
}

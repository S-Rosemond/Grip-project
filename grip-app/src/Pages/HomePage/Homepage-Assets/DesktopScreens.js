import React from 'react';
import Large from './homepageImages/pexels-aptez-1280-960-Large.jpeg';
import xLarge from './homepageImages/pexels-1440-xLarge.jpeg';
import dxLarge from './homepageImages/pexels-Thaifood-1920-2xLarge.jpeg';

const DesktopScreens = () => (
	<img
		async="on"
		style={{ width: '100vw', height: '20em', objectFit: 'cover', objectPosition: '5 bottom' }}
		src={Large}
		alt="Asian cuisine vegetable chili"
		srcSet={`${Large} 1280w,${xLarge} 1440w,${dxLarge} 1920w`}
	/>
);

export default DesktopScreens;

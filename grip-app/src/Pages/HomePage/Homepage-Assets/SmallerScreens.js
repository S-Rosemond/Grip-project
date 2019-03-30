import React from 'react';
import xSmall from './homepageImages/pexels-aptez-425-319-Xsmall.jpeg';
import Small from './homepageImages/pexels-apetzl-800-600-Small.jpeg';
import Medium from './homepageImages/pexels-aptez-1024-768-Medium.jpeg';

const SmallerScreens = () => (
	<img
		aysnc="on"
		style={{ width: '100vw', height: '20em' }}
		src={xSmall}
		alt="Asian cuisine vegetable chili"
		srcSet={`
 ${xSmall} 425w,
${Small} 800w,
${Medium} 1024w,
`}
	/>
);

export default SmallerScreens;

import React from 'react';
import xxSm_375 from './storeView/pexels-375-300.jpeg';
import xSm_426 from './storeView/pexels-426-300.jpeg';
import sm_640 from './storeView/pexels-Thaifood-640.jpeg';
import smMedium_769 from './storeView/pexels-769.jpeg';
import medium_1025 from './storeView/pexels-1025.jpeg';
import Large_1440 from './storeView/pexels-1440.jpeg';
import mediumL_1280 from './storeView/pexels-Thaifood-1280.jpeg';
import xLarge_1920 from './storeView/pexels-Thaifood-1920.jpeg';
// import tigerIcon from './storeView/'

const SmallerScreens = () => (
	<img
		style={{ width: '100vw', height: '20em' }}
		src={xxSm_375}
		alt=""
		srcSet={`	
							 ${xxSm_375} ,
							${xSm_426} 425w,
							${sm_640}640w,
							${smMedium_769}768w,
								`}
	/>
);

const DesktopScreens = () => (
	<img
		style={{ width: '100vw', height: '30em' }}
		src={medium_1025}
		alt=""
		srcSet={`	
							 ${medium_1025} ,
							${mediumL_1280} 1280w,
							${Large_1440}1440w,
							${xLarge_1920}1920w,
								`}
	/>
);

export { SmallerScreens, DesktopScreens };

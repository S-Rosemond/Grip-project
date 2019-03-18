import React, { Fragment } from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';
import Title from '../Home/Home-Fragments/HomeTitle';

export default function Beverages(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<Fragment>
						<Title
							number="Happy Hours"
							subtitle="3:00pm - 6:00pm "
							textStroke="#202020"
							shadowFont=" 3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000"
						/>
						<Title
							subtitle="HAPPY HOUR FOOD REQUIRES A MINIMUM OF ONE DRINK PER PERSON"
							typographyColor="error"
						/>

						<NewPage
							menu={value.happy_drinks}
							location={props.location.pathname}
							display={value.drunk_orig}
						/>

						<NewPage
							menu={value.happy_appetizers}
							location={props.location.pathname}
							display={value.egg_rolls}
						/>
					</Fragment>
				);
			}}
		</ContextConsumer>
	);
}

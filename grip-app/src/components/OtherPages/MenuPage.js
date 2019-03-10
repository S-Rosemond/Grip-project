import React from 'react';
import { ContextConsumer } from '../../context/Context';
import NewPage from './NewPage';

export default function Menu(props) {
	return (
		<ContextConsumer>
			{value => {
				return (
					<React.Fragment>
						<NewPage menu={value.appetizers} location={props.location.pathname} />

						<NewPage
							menu={value.soup}
							headline="Soup"
							location={props.location.pathname}
							pricing="Soup: choice of Chicken, Tofu or Vegetables: $8.95, 
							Beef or Pork: $10, 
							Shrimp: $12, 
							Seafood: $14"
						/>
						<NewPage
							menu={value.wontonSoup}
							display={value.pumpkin_shrimp}
							location={props.location.pathname}
						/>
						<NewPage menu={value.noodle_soup} display={value.khao_soi} location={props.location.pathname} />
						<NewPage menu={value.salads} display={value.larb} location={props.location.pathname} />
						<NewPage
							menu={value.noodles}
							display={value.pad_thai}
							location={props.location.pathname}
							pricing="Noodles: choice of Chicken, 
							Tofu, Vegetable $11,
							 Beef or Pork $12,
							 Shrimp $14, 
							 Seafood $16"
						/>
						<NewPage
							menu={value.stir_fried}
							display={value.chicken_cashew}
							location={props.location.pathname}
							pricing="Stir-fried: served with steamed rice. Substitute brown rice add $1. Choice of Chicken, Tofu, Vegetable $11, Beef or Pork $12,Shrimp $14, Seafood $16"
						/>
						<NewPage
							menu={value.curries}
							display={value.duck_curry}
							location={props.location.pathname}
							pricing="Curries: 
							served with steamed rice. 
							Substitute: brown rice add $1. 
							Choice of Chicken, Tofu, Vegetable $11. 
							Beef or Pork $12. 
							Shrimp $14. 
							Seafood $16."
						/>
						<NewPage
							menu={value.pumpkin_curry}
							display={value.pumpkin_curr}
							location={props.location.pathname}
							pricing="Pumpkin curry: chicken, pork, beef or tofu  $13  Grilled shrimp   $17"
						/>
						<NewPage
							menu={value.fried_rice}
							display={value.drunken_noodle}
							location={props.location.pathname}
							pricing="Fried Rice: Choice of Chicken, Tofu, Vegetable $11. 
							Beef or Pork $12. 
							Shrimp $14. 
							Seafood $16"
						/>
						<NewPage
							menu={value.specials}
							display={value.panang}
							location={props.location.pathname}
							pricing="Specials: served with steamed rice. Substitute brown rice add $1."
						/>
					</React.Fragment>
				);
			}}
		</ContextConsumer>
	);
}

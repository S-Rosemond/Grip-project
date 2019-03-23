import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid';
import HRule from '../Util/HRule';
import TitleDivider from './../Util/TitleDivider';
import MenuTable from '../Table/MenuTable';

export const CartListing = props => {
	return (
		<React.Fragment>
			{props.list.map(items => {
				return (
					<React.Fragment key={uuidv4()}>
						<span key={uuidv4()} style={{ justifySelf: 'center', marginTop: 15 }}>
							{items.title} <TitleDivider />
							<span style={{ fontFamily: 'Roboto', fontSize: '1.2rem', margin: '10px 0' }}>
								{items.info ? items.info : ''}
							</span>
						</span>

						<span className="price" key={uuidv4()} style={{ justifySelf: 'center', margin: '10px 0' }}>
							{!items.price ? null : <span>$ {items.price}</span>}
						</span>
					</React.Fragment>
				);
			})}
		</React.Fragment>
	);
};

const Flow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	font-family: 'Ultra';
	margin-bottom: 20px;
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		.price {
			align-self: center;
		}
	}
`;

export default function Cart(props) {
	const stringChecks = 'Soup' || 'Stir-Fried' || 'Noodles' || 'Curry';
	return (
		<React.Fragment>
			{!props.price ? null : <MenuTable />}
			<HRule content={props.banner} />
			<Flow>{props.cartlist}</Flow>
			{props.tabs ? props.tabs : props.cart ? props.cart : null}
		</React.Fragment>
	);
}

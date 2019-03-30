import React from 'react';
import styled from 'styled-components';
import HRule from '../Util/HRule';
import MenuTable from '../Table/MenuTable';

const Flow = styled.div`
	display: grid;
	text-align: center;
	font-family: 'Ultra';
	margin-bottom: 20px;
	grid-row-gap: 1rem;
	grid-column-gap: 1.1rem;
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

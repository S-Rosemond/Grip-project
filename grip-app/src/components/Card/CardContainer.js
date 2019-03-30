import React from 'react';
import HRule from '../Util/HRule';
import MenuTable from '../Table/MenuTable';
import styled from 'styled-components';

const CardGrid = styled.div`
	display: grid;
	text-align: center;
	font-family: 'Ultra';
	justify-content: center;
	margin-bottom: 20px;
	grid-row-gap: 1rem;
	@media (min-width: 768px) {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(4, 1fr);
		.price {
			align-self: center;
		}
	}
`;

const CardContainer = props => {
	return (
		<React.Fragment>
			{!props.price ? null : <MenuTable />}
			<HRule content={props.banner} />
			<CardGrid>{props.cardlist}</CardGrid>
		</React.Fragment>
	);
};

export default CardContainer;

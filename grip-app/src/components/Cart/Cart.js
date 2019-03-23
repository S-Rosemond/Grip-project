import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid';
import HRule from '../Util/HRule';
import TitleDivider from './../Util/TitleDivider';

export const CartListing = props => {
	return (
		<React.Fragment>
			{props.list.map(items => {
				return (
					<React.Fragment key={uuidv4()}>
						<span key={uuidv4()} style={{ justifySelf: 'center', marginTop: 15 }}>
							{items.title} <TitleDivider />
							{items.info ? items.info : ''}
						</span>

						<span key={uuidv4()} style={{ justifySelf: 'center', margin: '10px 0' }}>
							$ {items.price}
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
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
`;

export default function Cart(props) {
	return (
		<React.Fragment>
			<HRule content={props.banner} />
			<Flow>{props.cartlist}</Flow>
		</React.Fragment>
	);
}

import React from 'react';
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
						</span>

						<span key={uuidv4()} style={{ justifySelf: 'center', margin: '10px 0' }}>
							{items.info ? items.info : ''} $ {items.price}
						</span>
					</React.Fragment>
				);
			})}
		</React.Fragment>
	);
};

export default function Cart(props) {
	return (
		<React.Fragment>
			<HRule content={props.banner} />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
					fontFamily: 'Ultra'
				}}
			>
				{props.cartlist}
			</div>
		</React.Fragment>
	);
}

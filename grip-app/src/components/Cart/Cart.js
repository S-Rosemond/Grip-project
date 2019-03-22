import React from 'react';
import uuidv4 from 'uuid';
import { Typography, Divider } from '@material-ui/core/';
import HRule from '../Util/HRule';

export const CartListing = props => {
	return (
		<React.Fragment>
			{props.list.map(items => {
				return (
					<React.Fragment key={uuidv4()}>
						<span key={uuidv4()} style={{ justifySelf: 'center' }}>
							{' '}
							{items.title}{' '}
						</span>
						<span key={uuidv4()} style={{ justifySelf: 'center' }}>
							$ {items.price}
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
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr 1fr)' }}>{props.cartlist}</div>
		</React.Fragment>
	);
}

import React from 'react';
import uuidv4 from 'uuid';
import styled from 'styled-components';
import TitleDivider from '../Util/TitleDivider';
import ImageRender, { imageLayout } from './../ImageSlider/ImageRender';

const LayoutDiv = styled.div`
	display: grid;
	justify-content: center;
	margin-top: 15px;
	box-shadow: 0 0 10px;
	border-radius: 0.4em;
`;

export const CartListing = props => {
	return (
		<React.Fragment>
			{props.list.map(items => {
				return (
					<React.Fragment key={uuidv4()}>
						<LayoutDiv test={items.image !== undefined ? true : false} key={uuidv4()}>
							{items.image ? (
								<ImageRender image={items.image} title={items.title} />
							) : !items.info ? null : (
								<div style={imageLayout} />
							)}
							<h2>{items.title}</h2>
							<TitleDivider />

							<span style={{ fontFamily: 'Roboto', fontSize: '1.1rem', margin: '10px' }}>
								{items.info ? items.info : ''}
							</span>
							<span style={{ margin: 10 }} key={uuidv4()}>
								{!items.price ? null : <span>{`$ ${items.price}`}</span>}
							</span>
						</LayoutDiv>
					</React.Fragment>
				);
			})}
		</React.Fragment>
	);
};

import React from 'react';
import uuidv4 from 'uuid';
import TitleDivider from '../Util/TitleDivider';
import ImageRender, { imageLayout } from './../ImageSlider/ImageRender';

const layout = {
	display: 'grid',
	justifyContent: 'center',
	marginTop: 15
};

export const CartListing = props => {
	return (
		<React.Fragment>
			{props.list.map(items => {
				return (
					<React.Fragment key={uuidv4()}>
						<div>
							<div key={uuidv4()} style={layout}>
								{!items.image ? (
									<div style={imageLayout} />
								) : (
									<ImageRender image={items.image} title={items.title} />
								)}
								<h2>{items.title}</h2>
								<TitleDivider />

								<span style={{ fontFamily: 'Roboto', fontSize: '1.2rem', margin: '10px 0' }}>
									{items.info ? items.info : ''}
								</span>
								<span
									className="price"
									key={uuidv4()}
									style={{ justifySelf: 'center', margin: '10px 0' }}
								>
									{!items.price ? null : <span>$ {items.price}</span>}
								</span>
							</div>
						</div>
					</React.Fragment>
				);
			})}
		</React.Fragment>
	);
};

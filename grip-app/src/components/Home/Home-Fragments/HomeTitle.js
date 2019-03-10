import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core/';
// Not hard coded so components can be reused in other projects
const Title = ({
	title,
	subtitle,
	number,
	textColorMain,
	textColor,
	shadowFontMain,
	shadowFont,
	textStrokeMain,
	textStroke,
	typographyColor
}) => (
	<Fragment>
		<Typography
			variant="h6"
			color="secondary"
			style={{
				fontFamily: 'ultra',
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				fontSize: 25,
				marginBottom: 5,
				marginTop: 15
			}}
		>
			<span
				style={{
					color: textColorMain || textColor || '#da4444',
					WebkitTextStroke: textStrokeMain || textStroke || 'none',
					textShadow: shadowFontMain || shadowFont || 'none'
				}}
			>
				{title}
			</span>{' '}
			<span
				style={{
					color: textColor || '#ff8400',
					WebkitTextStroke: textStroke || 'none',
					textShadow: shadowFont || 'none'
				}}
			>
				{number}
			</span>
		</Typography>
		<Typography color={typographyColor} align="center" style={{ fontWeight: 'bold', marginBottom: 15 }}>
			{subtitle}
		</Typography>
	</Fragment>
);

export default Title;

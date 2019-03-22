import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core/';

const Title = ({
	title,
	subtitle,
	number,
	textColorMain,
	textColor,
	subTextColor,
	shadowFontMain,
	shadowFont,
	textStrokeMain,
	textStroke,
	typographyColor,
	fontsize
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
					color: subTextColor || '#ff8400',
					WebkitTextStroke: textStroke || 'none',
					textShadow: shadowFont || 'none',
					fontSize: fontsize
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

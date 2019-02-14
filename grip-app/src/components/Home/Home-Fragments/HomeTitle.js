import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core/';

const Title = ({ title, subtitle, number }) => (
	<Fragment>
		<Typography
			variant="h6"
			color="secondary"
			style={{ fontFamily: 'ultra', textAlign: 'center', display: 'flex', flexDirection: 'column', fontSize: 25 }}
		>
			{title} <span style={{ color: '#ff8400' }}>{number}</span>
		</Typography>
		<Typography color="textSecondary" align="center" style={{ fontWeight: 'bold' }}>
			{subtitle}
		</Typography>
	</Fragment>
);

export default Title;

import React from 'react';
import { Typography } from '@material-ui/core/';

export default function HomeTime() {
	const days = ['MONDAY   ', 'TUESDAY  ', 'WEDNESDAY ', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

	return (
		<div>
			{days.map(day => {
				let time;
				switch (day) {
					case 'FRIDAY':
						time = '11am - 10pm';
						break;
					case 'SATURDAY':
						time = '12pm - 10pm';
						break;
					case 'SUNDAY':
						time = '12pm - 9pm';
						break;
					default:
						time = '11am - 9pm';
				}

				return (
					<Typography
						key={`${day}${day}${time}`}
						gutterBottom={true}
						color="textSecondary"
						style={{
							listStyle: 'none',
							fontWeight: 'bold',
							display: 'grid',
							gridTemplateColumns: 'repeat(2, 10em)',
							justifyContent: 'center',
							marginTop: 4.9
						}}
					>
						<li key={day}>{day}</li>
						<li key={`${day}  ${time}`}>{time}</li>
					</Typography>
				);
			})}
		</div>
	);
}

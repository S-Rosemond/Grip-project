import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, withStyles, Typography } from '@material-ui/core/';
import { SmallerScreens, DesktopScreens } from '../../assets/HomeImages';

const styles = theme => ({
	root: {
		flexGrow: 1
	}
});

class HomePage extends Component {
	state = {
		spacing: '16'
	};

	render() {
		const { classes } = this.props;
		const widthCheck = window.innerWidth;

		const days = ['MONDAY   ', 'TUESDAY  ', 'WEDNESDAY ', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

		return (
			<Fragment>
				<Grid container className={classes.root} direction={'column'} spacing={16}>
					<Grid item>
						{widthCheck <= 776 ? <SmallerScreens /> : <DesktopScreens />}
						<Typography variant="h6" color="secondary" style={{ fontFamily: 'ultra', textAlign: 'center' }}>
							Wild Tiger Thai Cuisine & Bar
						</Typography>
						<Typography color="textSecondary" align="center" style={{ fontWeight: 'bold' }}>
							1825 SE 164th AVE Suite 101 VANCOUVER, WA 98683
						</Typography>

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
									key={day}
									color="textSecondary"
									align="center"
									style={{ fontWeight: 'bold' }}
								>{` ${day} ${time} `}</Typography>
							);
						})}
					</Grid>

					{[0, 1].map((value, index) => (
						<Grid key={value} item sm>
							<Paper />
						</Grid>
					))}
				</Grid>
			</Fragment>
		);
	}
}

HomePage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);

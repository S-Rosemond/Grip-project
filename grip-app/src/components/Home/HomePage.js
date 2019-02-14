import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, Typography } from '@material-ui/core/';
import SmallerScreens from './Homepage-Assets/SmallerScreens';
import DesktopScreens from './Homepage-Assets/DesktopScreens';
import Title from './Home-Fragments/HomeTitle';

const styles = () => ({
	root: {
		flexGrow: 1
	},
	grow: { flexGrow: 1 }
});

class HomePage extends Component {
	//Width as state for resize; my logic at first was users do not usually change width size so whatever image is cached they view: that = faster, better UX. But some users may resize if they have multiple screens, etc so let React deal with it!
	state = {
		widthCheck: window.innerWidth
	};
	render() {
		const { classes } = this.props;

		const days = ['MONDAY   ', 'TUESDAY  ', 'WEDNESDAY ', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

		return (
			<Fragment>
				<Grid container className={classes.root} direction={'column'} spacing={16}>
					<Grid item>
						{this.widthCheck <= 776 ? <SmallerScreens /> : <DesktopScreens />}

						<Title
							title={'Wild Tiger Thai Cuisine & Bar'}
							subtitle={'	1825 SE 164th AVE Suite 101 VANCOUVER, WA 98683'}
							number={'360-882-8887'}
						/>

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
								>
									{day}
									{time}
								</Typography>
							);
						})}
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

HomePage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, withStyles } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { SmallerScreens, DesktopScreens } from '../assets/HomeImages';

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

		return (
			<Fragment>
				<Grid container className={classes.root} direction={'column'} spacing={16}>
					<Grid item>{widthCheck <= 776 ? <SmallerScreens /> : <DesktopScreens />}</Grid>

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

// HomePage.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(HomePage);

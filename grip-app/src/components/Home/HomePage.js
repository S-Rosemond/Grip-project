import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core/';
import SmallerScreens from './Homepage-Assets/SmallerScreens';
import DesktopScreens from './Homepage-Assets/DesktopScreens';
import Title from './Home-Fragments/HomeTitle';
import Time from './Home-Fragments/HomeTime';
import Button from '@material-ui/core/Button';

const styles = () => ({
	root: {
		flexGrow: 1
	},
	grow: { flexGrow: 1 }
});

class HomePage extends Component {
	state = {
		widthCheck: window.innerWidth
	};
	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<Grid container className={classes.root} direction={'column'}>
					<Grid item>
						{this.widthCheck <= 776 ? <SmallerScreens /> : <DesktopScreens />}

						<Title
							title={'Wild Tiger Thai Cuisine & Bar'}
							subtitle={'	1825 SE 164th AVE Suite 101 VANCOUVER, WA 98683'}
							number={'360-882-8887'}
						/>

						<Title number="Hours" textColor="#da4444" />
						<Time />

						<Title subtitle="We are bringing new Thai flavor dishes to the South East of Vancouver, WA. " />
						<Title
							title={
								<Button
									variant="contained"
									color="secondary"
									href="https://www.facebook.com/wildtigerthairestaurantofficialpage/"
								>
									Face Book
								</Button>
							}
						/>
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

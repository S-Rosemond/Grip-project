import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core/';
import SmallerScreens from './Homepage-Assets/SmallerScreens';
import DesktopScreens from './Homepage-Assets/DesktopScreens';
import Title from './Home-Fragments/HomeTitle';
import Time from './Home-Fragments/HomeTime';

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
							textStroke="#202020"
							shadowFont=" 3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000"
						/>
						<Title
							number="Hours"
							textColor="#da4444"
							textStroke="#202020"
							shadowFont=" 3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000"
						/>
						<Time />
						<Title
							number="Happy Hours"
							subtitle="3:00pm - 6:00pm "
							textStroke="#202020"
							shadowFont=" 3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000"
						/>
						<Title
							subtitle="HAPPY HOUR FOOD REQUIRES A MINIMUM OF ONE DRINK PER PERSON"
							typographyColor="error"
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

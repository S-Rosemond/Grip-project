import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import uuidv4 from 'uuid';

import ImagesSupplier from './NewPageImageSupplier/ImagesSupplier';

const styles = theme => {
	// console.log(theme);
	return {
		card: {
			maxWidth: 400
		},

		actions: {
			display: 'flex',
			justifyContent: 'center'
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		avatar: {
			backgroundColor: '#da4444'
		},
		subaction: {
			fontSize: '1.2em',
			fontWeight: 100,
			cursor: 'default'
		}
	};
};
// Window.innerWidth here again to avoid issues
class NewPage extends React.Component {
	state = {
		expanded: false,
		winWidth: window.innerWidth
	};

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	render() {
		let route = this.props.location;
		const regex = /^\/(\w+)/gi;
		let banner = regex.exec(route);
		const { classes } = this.props;
		console.log(this.props);
		return (
			<Fragment>
				<div style={{ textAlign: 'center' }}>
					<h1>
						{(this.props.display && (
							<ImagesSupplier supplydrop={this.props.display} screensize={this.state.winWidth} />
						)) ||
							this.props.headline ||
							banner[1]}
					</h1>
					<hr />
				</div>
				<Grid container>
					{this.props.menu.map(element => (
						<Grid
							item
							xs={12}
							sm={6}
							lg={3}
							style={{ fontFamily: 'ultra', padding: '1.1rem' }}
							key={uuidv4()}
						>
							<Card className={(classes.card, classes.subheader)}>
								<CardHeader
									avatar={
										<Avatar color="secondary" aria-label="Recipe" className={classes.avatar}>
											{element.title[0]}
										</Avatar>
									}
									title={element.title}
									action={
										<IconButton className={classes.subaction}>{`$ ${element.price}`}</IconButton>
									}
								/>

								{element.info && (
									<Fragment>
										<CardActions className={classes.actions} disableActionSpacing>
											<Typography paragraph>Ingredients:</Typography>
											<IconButton
												className={classnames(classes.expand, {
													[classes.expandOpen]: this.state.expanded
												})}
												onClick={this.handleExpandClick}
												aria-expanded={this.state.expanded}
												aria-label="Show more"
											>
												<ExpandMoreIcon />
											</IconButton>
										</CardActions>
										<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
											<CardContent>
												<Typography paragraph>{element.info}</Typography>
											</CardContent>
										</Collapse>
									</Fragment>
								)}
							</Card>
						</Grid>
					))}
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(styles)(NewPage);

// element.img ?   <CardMedia
// className={classes.media}
// image="/static/images/cards/paella.jpg"
// title="Paella dish"
// /> : null
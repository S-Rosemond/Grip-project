import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import uuidv4 from 'uuid';
import ImagesSupplier from './NewPageImageSupplier/ImagesSupplier';

const styles = theme => {
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

class NewPage extends React.Component {
	state = {
		info: 'served with steamed rice. Substitute brown rice $1',
		soup: [
			{
				subheader: 'Choice of',
				gp1: 'Chicken, Tofu or Vegetables',
				gp1Price: 8.95,
				gp2: 'Beef or Pork',
				gp2Price: 10,
				shrimp: 'Shrimp',
				shrimpPrice: 12,
				seafood: 'Seafood',
				seafoodPrice: 14
			}
		],
		choice: [
			{
				gp1: 'Tofu or Vegetables',
				gp1Price: 11,
				gp2: 'Beef or Pork',
				gp2Price: 12,
				shrimp: 'Shrimp',
				shrimpPrice: 14,
				seafood: 'Seafood',
				seafoodPrice: 16
			}
		]
	};

	render() {
		let route = this.props.location;
		const regex = /^\/(\w+)/gi;
		let banner = regex.exec(route);
		const { classes } = this.props;

		return (
			<Fragment>
				<div style={{ textAlign: 'center' }}>
					<h1>
						{(this.props.display && <ImagesSupplier supplydrop={this.props.display} />) ||
							this.props.headline ||
							banner[1]}
					</h1>
					<hr />

					<h5>{this.props.pricing}</h5>
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
										element.price && (
											<IconButton
												className={classes.subaction}
											>{`$ ${element.price}`}</IconButton>
										)
									}
								/>

								{element.info && (
									<Fragment>
										<CardContent>
											<Typography paragraph>{element.info}</Typography>
										</CardContent>
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

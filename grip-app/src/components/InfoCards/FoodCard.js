import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		padding: '0 5%',
		minWidth: 275,
		marginTop: 25
	},
	media: {
		height: 140
	}
};

function MediaCard(props) {
	const { classes, image, title } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia className={classes.media} image={image} title={title} />
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						style={{ color: '#da4444', fontWeight: 'bold' }}
					>
						{props.name.toUpperCase()}
					</Typography>
					<Typography component="p" variant="overline">
						{props.main}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
			</CardActions>
		</Card>
	);
}

MediaCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);

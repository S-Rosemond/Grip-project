import React from 'react';
import uuidv4 from 'uuid';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TitleDivider from '../Util/TitleDivider';

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 350
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	header: {
		fontFamily: 'Ultra'
	}
}));

function RecipeReviewCard(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			{props.list.map(item => (
				<Card key={uuidv4()} className={classes.card}>
					<CardMedia className={classes.media} image={item.image} title={item.title} />
					<CardHeader className={classes.header} title={item.title} subheader={<TitleDivider />} />
					<CardContent>{item.info ? <Typography component="p">{item.info}</Typography> : null}</CardContent>
					<CardHeader className={classes.header} title={`$ ${item.price}`} />
				</Card>
			))}
		</React.Fragment>
	);
}

export default RecipeReviewCard;

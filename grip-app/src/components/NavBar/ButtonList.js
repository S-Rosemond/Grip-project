import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import uuidv4 from 'uuid';
import { ContextConsumer } from '../../context/Context';

const useStyles = makeStyles(() => ({
	buttons: {
		color: '#fff',
		backgroundColor: '#2196f3',
		margin: '0 5px',
		'&:hover': {
			backgroundColor: '#fff',
			color: '#2196f3'
		}
	}
}));
export const ButtonLinks = () => {
	const classes = useStyles();

	return (
		<ContextConsumer>
			{value => {
				return value.menuListArray.map((text, index) => (
					<Button key={uuidv4()} className={classes.buttons} component={Link} to={index === 0 ? '/' : text}>
						{text}
					</Button>
				));
			}}
		</ContextConsumer>
	);
};

export default ButtonLinks;

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import uuidv4 from 'uuid';
import { ContextConsumer } from '../../context/Context';

const useStyles = makeStyles(() => ({
	buttons: {
		color: '#fff',
		backgroundColor: '#ff8400',
		margin: '0 5px'
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

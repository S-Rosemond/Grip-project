import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const bgColor = {
	backgroundColor: '#ff8400'
};

const MenuBar = () => (
	<div className="MenuBar">
		<CardActions>
			<Button style={bgColor} size="medium" variant="outlined" color="inherit">
				Home
			</Button>

			<Button style={bgColor} variant="contained" color="inherit">
				Menu
			</Button>

			<Button style={bgColor} color="inherit">
				Contact
			</Button>
		</CardActions>
	</div>
);

export default MenuBar;

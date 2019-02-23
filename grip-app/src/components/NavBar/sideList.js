import React from 'react';

import { Link } from 'react-router-dom';

import { Divider, ListItemIcon, ListItemText, MenuList, MenuItem } from '@material-ui/core/';

import uuidv4 from 'uuid';
import { ContextConsumer } from '../../context/Context';

export default class SideBar extends React.Component {
	render() {
		return (
			<ContextConsumer>
				{value => {
					return (
						<MenuList>
							{value.menuListArray.map((text, index) => {
								return (
									<div key={uuidv4()}>
										<MenuItem
											component={Link}
											to={index === 0 ? '/' : text}
											key={uuidv4()}
											tabIndex={0}
											onKeyDown={this.props.handleDrawerToggle}
											onClick={this.props.handleDrawerToggle}
										>
											<ListItemIcon key={uuidv4()}>{value.svgIcons[index]}</ListItemIcon>
											<ListItemText primary={text} />
										</MenuItem>
										<Divider />
									</div>
								);
							})}
						</MenuList>
					);
				}}
			</ContextConsumer>
		);
	}
}

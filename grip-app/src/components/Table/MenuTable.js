import React, { Fragment } from 'react';
import styled from 'styled-components';

const TableLayout = styled.div`
	border: 1px solid #ef0303;
	border-radius: 8px;
	display: block;
	overflow: hidden;
`;

export default function MenuTable(props) {
	return (
		<TableLayout>
			<h2 style={{ textAlign: 'center' }}>{props.banner}</h2>
			<div>
				<p>{props.choice}</p>
				<span style={{ float: 'right' }}>{props.cost}</span>
			</div>
		</TableLayout>
	);
}

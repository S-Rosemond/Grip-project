import React from 'react';
import styled from 'styled-components';

const TitleRule = styled.hr`
	margin-top: 5px;
	margin-bottom: 10px;
	border: 0;
	border-bottom: 5px solid #ef0303;
	width: 35%;
	border-radius: 0.5em;
	@media (min-width: 768px) {
		width: 65%;
	}
`;

export default function TitleDivider() {
	return <TitleRule />;
}

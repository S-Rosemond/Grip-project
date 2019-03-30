import React from 'react';
import styled from 'styled-components';

const HorizontalRule = styled.hr`
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: black;
	text-align: center;
	height: 4.0em;
	opacity: 0.7;
	&:before {
		content: '';
		background: linear-gradient(to right, transparent, #141414, transparent);
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: '${props => {
			return props.content;
		}}';
		position: relative;
		display: inline-block;
		color: black ;
		padding: 0 0.5em;
		line-height: 1.5em;
		color: #ff8400 ;
    background-color: #fcfcfa;
    font-size: 2.25rem;
    font-family: Ultra;
  }
 
`;

export default function HRule(props) {
	return <HorizontalRule content={props.content} />;
}

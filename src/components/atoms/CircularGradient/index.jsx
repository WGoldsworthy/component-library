import React from 'react';
import styled from 'styled-components'

const CircularGradient = ({ size, colors }) => {
	const CircularGrad = styled.div`
		height: ${size ? size : '180px'};
	  	width: ${size ? size : '180px'};
	  	position: absolute;
	  	left: 110px;
	  	top: 30px;
	  	border-radius: 50%;
	  	background: -webkit-linear-gradient(#D4F4DD, #D62246, #4B1D3F);
	`

	return(
		<CircularGrad className="circularGradient" />
	);
};

export default CircularGradient;
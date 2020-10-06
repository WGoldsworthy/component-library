import React from 'react';
import { Col } from 'reactstrap';
import './index.css';

const RedSlideBackgroundText = ({textLines}) => (
	<Col xs={12} className="mainHeader__col justify-content-center">
		<Col xs={4} className="offset-sm-4 mainHeader_container">
			<div className="mainHeader__animation-block"></div>
			{textLines.map(line => (
				<h3 className="mainHeader__text">{line}</h3> 
			))}
		</Col>
	</Col>
);

export default RedSlideBackgroundText;

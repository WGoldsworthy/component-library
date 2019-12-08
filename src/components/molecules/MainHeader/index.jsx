import React from 'react';
import {Col, Row} from 'reactstrap';
import './index.css';

const MainHeader = ({title}) => (
	<Col xs={12} className="mainHeader__col justify-content-center">
		<Col xs={4} className="offset-sm-4 mainHeader_container">
			<div className="mainHeader__animation-block"></div>
			<h3 className="mainHeader__text">Hi, I'm Will; Software developer,</h3>
			<h3 className="mainHeader__text">UI/UX enthusiast and cycling fanatic</h3>
		</Col>
	</Col>
);

export default MainHeader;

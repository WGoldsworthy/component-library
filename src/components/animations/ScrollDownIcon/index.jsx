import React from 'react';
import {Col, Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const ScrollDownIcon = () => (
	<Row className="scrollDownIcon__row">
		<Col xs={12} className="justify-content-center">
			<p>This way</p>
			<div className="scrollDownIcon__chevron-container">
				<FontAwesomeIcon icon={faChevronDown} />
			</div>
		</Col>
	</Row>
);

export default ScrollDownIcon;
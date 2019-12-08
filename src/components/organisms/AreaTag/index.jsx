import React, {useState} from 'react';
import './index.css';

const AreaTag = () => {
	const [currentArea, setCurrentArea] = useState("Welcome");

	return (
		<div className="areaTag">
			<div className="areaTag__circle" />
			<div className="areaTag__line" />
			<div className="areaTag__text">{currentArea}</div>
		</div>
	);
}

export default AreaTag;
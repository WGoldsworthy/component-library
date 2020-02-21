import React from 'react';
import './index.css'

const SlideOverImage = ({image}) => {
	
	return (
		<div className="slideOverImage">
			<img height='300px' src={require("../../assets/CyclingSunset.jpg")}/>
		</div>
	)
}

export default SlideOverImage;
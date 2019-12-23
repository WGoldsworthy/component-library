import React from 'react';

import './ClipText.css'

function ClipText (props) {
	console.log(props.gif)

	var gif = props.gif;

	if (props.type) {
		switch (props.type) {
			case "original":
				gif = "url(https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif)";
				break;
			case "fire":
				gif = "url(https://media.giphy.com/media/6wpHEQNjkd74Q/giphy.gif)"
				break;
			default:
				gif = "url(https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif)";
		}
	} 

	return(
		<div className="cliptext__main">
			<div className="cliptext" style={{
					background: ` ${gif}`, 
					backgroundSize: "contain",
					backgroundPosition: "top left",
					webkitBackgroundClip: "text"
					}}>
				{props.value}
			</div>
		</div>
	)
}

export default ClipText;
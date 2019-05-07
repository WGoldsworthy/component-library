import React from 'react'
import './Button.css'

class Button extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			active: false
		}
	}

	render() {
		return(
			<div className="button">
				<p>{this.props.label}</p>
			</div>
		)
	}
}

export default Button;
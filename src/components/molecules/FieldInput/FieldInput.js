import React from 'react'
import './FieldInput.css'

class FieldInput extends React.Component {
	
	constructor(props) {
		super(props)

		this.state = {
			value: '',
			placeholder: this.props.placeholder || "",
			error: false,
			complete: false,
			required: this.props.required,
			validation_message: this.props.validation_message || "",
			type: this.props.type || "text" 
		}
	}

	handleInput = ev => {
		var error = false;
		var complete = true;
		if (ev.target.value.length < 1) {
			error = true
			complete = false
		} 

		this.setState({
			value: ev.target.value,
			error: error,
			complete: complete
		})
	}

	render() {
		return (
			<div className="field-input">
				<input onBlur={this.handleInput} onChange={this.handleInput} type={this.state.type} className={ `${this.state.complete ? "success" : null} ${this.state.error ? "error" : null}` } />
				<span className={`field-input__placeholder ${(this.state.value.length >= 1) ? "hasInput" : null}`}>{this.state.placeholder}</span>
				<span className="field-input__validation-message">{this.state.validation_message}</span>
				<span className="field-input__validation-error"></span>
				<span className="field-input__validation-success"></span>
			</div>
		)
	}
}

export default FieldInput;
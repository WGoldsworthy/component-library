import React from 'react'
import { testForm } from './testForm'
import { Container, Row, Col } from 'reactstrap'

const elementMap = {
	FieldInput(data, handleSubmit) {
		return (<>
			<span>{data.label}</span><input type="text" onBlur={handleSubmit}/></>)
	}
}

class FormBuilder extends React.Component {
	
	constructor(props) {
		super(props)

		this.state = {
			current: 0,
			form: testForm.structure,
			completedForm: []
		}
	}

	handleSubmit = value => {

		var question = this.state.form[this.state.current].label;
		var entry = {
			question: question, 
			answer: value,
			id: this.state.current
		};

		var newForm = this.state.completedForm;
		newForm.push(entry)

		console.log(newForm)

		this.setState({
			current: (this.state.current + 1),
			completedForm: newForm
		})
	}


	renderNextQuestion() {
		if (this.state.form[this.state.current]) {
			var question = this.state.form[this.state.current]
			var element = elementMap[question.type](question);
			return element;
		}
		return ""
	}

	renderCompleted() {
		var toRender = this.state.completedForm.map((entry) => <Row key={entry.id}><p>{entry.question}</p><p>{entry.answer}</p></Row>)
		return toRender;
	}

	render() {
		return(
			<Container fluid>
				<Row>
					<Col className="form-builder__question">
						{this.renderNextQuestion(this.state.current)}
						<button onClick={() => this.handleSubmit()}>Submit</button>
					</Col>
					<Col className="form-builder__answers">
						{this.renderCompleted()}
					</Col>
				</Row>
			</Container>
		)
	}
}

export default FormBuilder;
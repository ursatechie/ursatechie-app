import React from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

const InputText = styled.span`
	margin-left: 5px;
`

class InputTest extends React.Component {
	state = {
		inputText: '',
	}

	handleInput(e) {
		this.setState({ inputText: e.target.value })
	}

	render() {
		return (
			<React.Fragment>
				<input onChange={this.handleInput.bind(this)} />

				<InputText>{this.state.inputText}</InputText>
			</React.Fragment>
		)
	}
}

export default InputTest

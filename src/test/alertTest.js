import React from 'react'
import styled from 'styled-components'

const StyledAlertTest = styled.div`
	align-items: center;
	display: flex;

	> button {
		margin-left: 5px;
	}
`

class AlertTest extends React.Component {
	state = {
		alertMessage: 'Alert Message',
	}

	alert() {
		alert(this.state.alertMessage)
	}

	handleInput(e) {
		this.setState({ alertMessage: e.target.value })
	}

	render() {
		return (
			<StyledAlertTest>
				<input type="text" onChange={this.handleInput.bind(this)} />
				<button onClick={this.alert.bind(this)}>Alert</button>
			</StyledAlertTest>
		)
	}
}

export default AlertTest

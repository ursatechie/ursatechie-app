import React from 'react'

class AlertTest extends React.Component {
	state = {
		alertMessage: 'Alert Message',
	}

	alert() {
		alert(this.state.alertMessage)
	}

	render() {
		return <button onClick={this.alert.bind(this)}>Alert</button>
	}
}

export default AlertTest

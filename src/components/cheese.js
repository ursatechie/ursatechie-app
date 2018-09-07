import React from 'react'
import styled from 'styled-components'

class Cheese extends React.Component {
	state = {
		cheese: 'hey',
	}

	changeText() {
		setTimeout(() => {
			this.setState({ cheese: 'what' })
			alert(this.state.cheese)
		}, 300)
		alert(this.props.headerDrawerOpen)
	}

	render() {
		return (
			<div>
				<button onClick={this.changeText.bind(this)}>Button</button>

				{this.state.cheese}

				{this.props.headerDrawerOpen && <div>great</div>}
			</div>
		)
	}
}

export default Cheese

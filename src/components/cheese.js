import React from 'react'
import styled from 'styled-components'

class Cheese extends React.Component {
	state = {
		cheese: 'hey',
	}

	changeText() {
		setTimeout(() => {
			this.setState({ cheese: 'what' })
			alert(this.props.headerDrawerOpen)
			alert(this.state.cheese)
		}, 300)
	}

	render() {
		return (
			<div>
				{this.props.headerDrawerOpen}

				<button onClick={this.changeText.bind(this)}>Button</button>

				{this.state.cheese}

				{this.props.headerDrawerOpen && <div>great</div>}
			</div>
		)
	}
}

export default Cheese

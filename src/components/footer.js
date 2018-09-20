import React from 'react'
import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const S__Footer = styled(Paper)`
	margin: 0 auto;
	max-width: var(--inner-container-width);
	padding: 0px;
	padding-top: 0;
`

class Footer extends React.Component {
	state = {
		value: 0,
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	goBack() {
		window.history.back()
	}

	goHome() {
		window.location.href = '/'
	}

	render() {
		const { value } = this.state

		return (
			<S__Footer elevation={10}>
				<BottomNavigation value={value} onChange={this.handleChange} showLabels>
					<BottomNavigationAction
						icon={<ChevronLeftIcon />}
						label="Back"
						onClick={this.goBack}
					/>
					<BottomNavigationAction
						icon={<PanoramaFishEyeIcon />}
						label="Home"
						onClick={this.goHome}
					/>
					<BottomNavigationAction
						icon={<ExpandLessIcon />}
						label="Drawer"
						onClick={this.props.toggleDrawer}
					/>
				</BottomNavigation>
			</S__Footer>
		)
	}
}
export default Footer

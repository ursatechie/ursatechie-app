import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import MenuIcon from '@material-ui/icons/Menu'

// const SideList = styled.div`
// 	width: 250px;
// `
// const sideListBottomText = `Tyler Wong J, 2018`

// const SideListCaption = styled(Typography)`
// 	font-style: italic;
// 	padding: 10px;
// `

// const sideList = (
// 	<SideList>
// 		<List>
// 			<MyDrawerItems />
// 		</List>
// 		<Divider />
// 		<SideListCaption align="right" variant="caption">
// 			{sideListBottomText}
// 		</SideListCaption>
// 	</SideList>
// )

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

	// state = {
	// 	top: false,
	// 	left: false,
	// 	bottom: false,
	// 	right: false,
	// }

	// toggleDrawer = (side, open) => () => {
	// 	this.setState({
	// 		[side]: open,
	// 	})
	// }

	render() {
		const { text, title } = this.props
		const { value } = this.state

		return (
			<BottomNavigation value={value} onChange={this.handleChange} showLabels>
				<BottomNavigationAction
					label="Back"
					icon={<ChevronLeftIcon />}
					onClick={this.goBack}
				/>
				<BottomNavigationAction
					label="Home"
					icon={<PanoramaFishEyeIcon onClick={this.goHome} />}
				/>
				<BottomNavigationAction label="Drawer" icon={<ExpandLessIcon />} />
			</BottomNavigation>
		)
	}
}

{
	/* <Paper elevation={5}>
	<Typography variant="headline" component="h3">
		{title}
	</Typography>
	<Typography component="p">{text}</Typography>


</Paper> */
}
export default Footer

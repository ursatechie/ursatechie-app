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
		// const { footerValue } = this.props
		const { value } = this.state

		return (
			<S__Footer elevation={10}>
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
					<BottomNavigationAction
						label="Drawer"
						icon={<ExpandLessIcon />}
						onClick={this.props.toggleDrawer}
					/>
				</BottomNavigation>
			</S__Footer>
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

import React from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

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
		const { siteTitle } = this.props

		return (
			<Paper elevation={5}>
				<Typography variant="headline" component="h3">
					This is where the Footer should be at.
				</Typography>
				<Typography component="p">
					The Footer is using Paper can be used to build surface or other
					elements for your application.
				</Typography>
			</Paper>
		)
	}
}

export default Footer

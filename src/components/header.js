import React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import MenuIcon from '@material-ui/icons/Menu'

import MyDrawerItems from './tileData'

const SideList = styled.div`
	width: 250px;
`
const sideListBottomText = 'Tyler is awesome!'

const sideList = (
	<SideList>
		<List>
			<MyDrawerItems />
		</List>
		<Divider />
		<Typography align="right">{sideListBottomText}</Typography>
	</SideList>
)

class Header extends React.Component {
	state = {
		top: false,
		left: false,
		bottom: false,
		right: false,
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		})
	}

	render() {
		const { siteTitle } = this.props

		return (
			<AppBar position="static" color="default">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={this.toggleDrawer('left', true)}
						className="open"
					>
						<MenuIcon />
					</IconButton>

					{/* <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button> */}

					<SwipeableDrawer
						open={this.state.left}
						onClose={this.toggleDrawer('left', false)}
					>
						<div
							tabIndex={0}
							role="button"
							onClick={this.toggleDrawer('left', false)}
							onKeyDown={this.toggleDrawer('left', false)}
						>
							{sideList}
						</div>
					</SwipeableDrawer>

					<Typography variant="title" color="inherit">
						{siteTitle}
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

export default Header

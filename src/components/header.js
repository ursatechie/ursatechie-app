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

import MyDrawerItems from './tileDataDrawerItems'

const SideList = styled.div`
	width: 250px;
`
const sideListBottomText = `Tyler Wong J, 2018`

const SideListCaption = styled(Typography)`
	font-style: italic;
	padding: 10px;
`

const sideList = (
	<SideList>
		<List>
			<MyDrawerItems />
		</List>
		<Divider />
		<SideListCaption align="right" variant="caption">
			{sideListBottomText}
		</SideListCaption>
	</SideList>
)

class Header extends React.Component {
	state = {
		top: false,
		left: this.props.headerDrawerOpen,
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
						onClick={this.props.toggleDrawer}
						className="open"
					>
						<MenuIcon />
					</IconButton>

					<SwipeableDrawer
						open={this.props.headerDrawerOpen}
						onClose={this.props.toggleDrawer}
					>
						<div
							tabIndex={0}
							role="button"
							onClick={this.props.toggleDrawer}
							onKeyDown={this.props.toggleDrawer}
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

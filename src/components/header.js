import React from 'react'
import Link from 'gatsby-link'
import ContentComponent from './contentComponent'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import MyDrawerItems from './tileData'

// import { mailFolderListItems, otherMailFolderListItems } from './tileData'

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

		const sideList = (
			<div>
				<List>
					<MyDrawerItems />
				</List>
				<Divider />
				{/* <List>{otherMailFolderListItems}</List> */}
				Side List Text
			</div>
		)

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

// const Header = ({ siteTitle }) => (
// 	<AppBar position="static" color="default">
// 		<Toolbar>
// 			<IconButton color="inherit" aria-label="Menu">
// 				<MenuIcon />
// 				<Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
// 			</IconButton>
// 			<Typography variant="title" color="inherit">
// 				{siteTitle}
// 			</Typography>
// 		</Toolbar>
// 	</AppBar>
// )

export default Header

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
import Drawer from './drawer'

class Header extends React.Component {
	render() {
		const { siteTitle, navItems } = this.props

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
							<Drawer navItems={navItems} />
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

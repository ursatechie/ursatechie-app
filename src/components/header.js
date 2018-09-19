import React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'

class Header extends React.Component {
	render() {
		const { siteTitle, navItems, navFooterText } = this.props

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

					<Typography variant="title" color="inherit">
						{siteTitle}
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

export default Header

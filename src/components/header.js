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

class Header extends React.Component {
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
					<IconButton color="inherit" aria-label="Menu">
						<MenuIcon />
						<Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
					</IconButton>
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

import React from 'react'
import Link from 'gatsby-link'
import ContentComponent from './contentComponent'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Header = ({ siteTitle }) => (
	<AppBar position="static" color="default">
		<Toolbar>
			<IconButton color="inherit" aria-label="Menu">
				<MenuIcon />
			</IconButton>
			<Typography variant="title" color="inherit">
				{siteTitle}
			</Typography>
		</Toolbar>
	</AppBar>
)

export default Header

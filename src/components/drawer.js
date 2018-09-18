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

const S__Drawer = styled.div`
	width: 250px;
`
const sideListBottomText = `Tyler Wong J, 2018`

const DrawerCaption = styled(Typography)`
	font-style: italic;
	padding: 10px;
`

class Drawer extends React.Component {
	render() {
		return (
			<S__Drawer>
				<List>
					<MyDrawerItems />
				</List>
				<Divider />
				<DrawerCaption align="right" variant="caption">
					{sideListBottomText}
				</DrawerCaption>
			</S__Drawer>
		)
	}
}

export default Drawer

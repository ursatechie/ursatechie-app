import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import SwipeableDrawer from '@material-ui/core/Drawer'

import MyDrawerItems from './tileDataDrawerItems'

const S__Drawer = styled.div`
	width: 250px;
`

const DrawerCaption = styled(Typography)`
	font-style: italic;
	padding: 10px;
`

class SideNavigation extends React.Component {
	render() {
		const {
			sideNavigationOpen,
			toggleSideNavigation,
			navItems,
			navFooterText,
		} = this.props

		return (
			<SwipeableDrawer open={sideNavigationOpen} onClose={toggleSideNavigation}>
				<S__Drawer
					tabIndex={0}
					role="button"
					onClick={toggleSideNavigation}
					onKeyDown={toggleSideNavigation}
				>
					<List>
						<MyDrawerItems navItems={navItems} />
					</List>
					<Divider />
					<DrawerCaption align="right" variant="caption">
						{navFooterText}
					</DrawerCaption>
				</S__Drawer>
			</SwipeableDrawer>
		)
	}
}

export default SideNavigation

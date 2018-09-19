import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

import MyDrawerItems from './tileDataDrawerItems'

const S__Drawer = styled.div`
	width: 250px;
`

const DrawerCaption = styled(Typography)`
	font-style: italic;
	padding: 10px;
`

class Drawer extends React.Component {
	render() {
		const { navItems, navFooterText } = this.props

		return (
			<S__Drawer>
				<List>
					<MyDrawerItems navItems={navItems} />
				</List>
				<Divider />
				<DrawerCaption align="right" variant="caption">
					{navFooterText}
				</DrawerCaption>
			</S__Drawer>
		)
	}
}

export default Drawer

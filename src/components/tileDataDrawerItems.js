// const tileData = ['one', 'two', 'three', 'four', 'five']

// export default tileData

import React from 'react'
import styled from 'styled-components'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Icon from '@material-ui/core/Icon'

import Link from 'gatsby-link'

const S__MyDrawerItems = styled.div`
	a {
		text-decoration: none;
	}
`

const MyDrawerItems = ({ navItems }) => (
	<S__MyDrawerItems>
		{navItems.map((navItem, index) => (
			<Link key={index} to="/">
				<ListItem button>
					<ListItemIcon>
						<Icon>{navItem.icon}</Icon>
					</ListItemIcon>
					<ListItemText primary={navItem.text} />
				</ListItem>
			</Link>
		))}
	</S__MyDrawerItems>
)

export default MyDrawerItems

// const tileData = ['one', 'two', 'three', 'four', 'five']

// export default tileData

import React from 'react'
import styled from 'styled-components'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

const navItems = [
	{
		icon: 'Drafts',
		text: 'Drafts',
	},
]

import Link from 'gatsby-link'

const S__MyDrawerItems = styled.div`
	a {
		text-decoration: none;
	}
`

const MyDrawerItems = () => (
	<S__MyDrawerItems>
		{navItems.map(navItem => (
			<div>
				{navItem.icon} - {navItem.text}
			</div>
		))}
		{/* <GridListTile key={tile.img}>
				<img src={tile.img} alt={tile.title} />
				<GridListTileBar
					title={tile.title}
					subtitle={<span>by: {tile.author}</span>}
					actionIcon={
						<TIconButton>
							<InfoIcon />
						</TIconButton>
					}
				/>
			</GridListTile> */}
		<Link to="/">
			<ListItem button>
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="Home" />
			</ListItem>
		</Link>
		<Link to="/typographypage/">
			<ListItem button>
				<ListItemIcon>
					<DraftsIcon />
				</ListItemIcon>
				<ListItemText primary="Typography" />
			</ListItem>
		</Link>
	</S__MyDrawerItems>
)

export default MyDrawerItems

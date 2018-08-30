// const tileData = ['one', 'two', 'three', 'four', 'five']

// export default tileData

import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

import Link from 'gatsby-link'

const MyDrawerItems = () => (
	<React.Fragment>
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
	</React.Fragment>
)

export default MyDrawerItems

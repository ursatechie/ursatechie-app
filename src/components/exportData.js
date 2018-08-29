// const tileData = ['one', 'two', 'three', 'four', 'five']

// export default tileData

import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

const ExportData = () => (
	<React.Fragment>
		<ListItem button>
			<ListItemIcon>
				<InboxIcon />
			</ListItemIcon>
			<ListItemText primary="Inbox" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<DraftsIcon />
			</ListItemIcon>
			<ListItemText primary="Drafts" />
		</ListItem>
	</React.Fragment>
)

export default ExportData

let test = 'test'
let test2 = 'test2'

export { test, test2 }

// https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default

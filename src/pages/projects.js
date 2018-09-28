// https://itnext.io/writing-customizable-styled-react-components-51d38ed20461
import React from 'react'

import Typography from '@material-ui/core/Typography'

import GridListComp from '../components/gridListComp'

import projects from '../data/projectsData'

const ProjectsPage = ({ children, data }) => (
	<div>
		<Typography variant="headline" component="h1">
			Projects
		</Typography>

		<GridListComp projects={projects} />
	</div>
)

export default ProjectsPage

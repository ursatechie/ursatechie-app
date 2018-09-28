// https://itnext.io/writing-customizable-styled-react-components-51d38ed20461
import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Typography from '@material-ui/core/Typography'

import ContentComponent from '../components/contentComp'
import CardComp from '../components/cardComp'
import GridListComp from '../components/gridListComp'

const ProjectsPage = ({ children, data }) => (
	<div>
		<Typography variant="headline" component="h1">
			Projects
		</Typography>

		<GridListComp projects={data.site.siteMetadata.projects} />
	</div>
)

export default ProjectsPage

export const query = graphql`
	query ProjectsQuery {
		site {
			siteMetadata {
				projects {
					img
					author
					title
				}
			}
		}
	}
`

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

import ContentComponent from '../components/contentComp'
import CardComp from '../components/cardComp'

const TGridListWrapper = styled.div`
	background-color: var(--white);
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	overflow: hidden;
`

const TGridList = styled(GridList)`
	height: 450px;
	width: 500px;
`
const TIconButton = styled(IconButton)`
	color: rgba(255, 255, 255, 0.54);
`

const GridListComp = ({ projects }) => (
	<TGridListWrapper>
		<TGridList cellHeight={180}>
			<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
				<ListSubheader component="div">Projects</ListSubheader>
			</GridListTile>

			{projects.map(project => (
				<GridListTile key={project.img}>
					<img src={project.img} alt={project.title} />
					<GridListTileBar
						title={project.title}
						subtitle={<span>by: {project.author}</span>}
						actionIcon={
							<TIconButton>
								<InfoIcon />
							</TIconButton>
						}
					/>
				</GridListTile>
			))}
		</TGridList>
	</TGridListWrapper>
)

export default GridListComp

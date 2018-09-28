// https://itnext.io/writing-customizable-styled-react-components-51d38ed20461
import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Typography from '@material-ui/core/Typography'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

import ContentComponent from '../components/contentComp'
import CardComp from '../components/cardComp'

import image1 from '../images/jump.jpg'

const tileData = [
	{
		img: image1,
		title: 'Image',
		author: 'author',
	},
	{
		img: image1,
		title: 'Image',
		author: 'author',
	},
	{
		img: image1,
		title: 'Image',
		author: 'author',
	},
	{
		img: image1,
		title: 'Image',
		author: 'author',
	},
]

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

const GridListComp = () => (
	<TGridListWrapper>
		<TGridList cellHeight={180}>
			<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
				<ListSubheader component="div">December</ListSubheader>
			</GridListTile>

			{tileData.map(tile => (
				<GridListTile key={tile.img}>
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
				</GridListTile>
			))}
		</TGridList>
	</TGridListWrapper>
)

const ProjectsPage = ({ children, data }) => (
	<div>
		<Typography variant="headline" component="h1">
			Projects
		</Typography>

		<GridListComp />
	</div>
)

export default ProjectsPage

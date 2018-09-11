import React from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// import image from '../images/contemplative-reptile.jpg'
import image from '../images/jump.jpg'

const S__CardComp = styled(Card)`
	&& {
		max-width: 345px;
		/* align-items: ${props => (props.left ? 'flex-start' : 'center')};
		background: var(--primary);
		color: var(--white);
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: var(--inner-container-width);
		padding: 10px; */
	}
`

const S__CardMedia = styled(CardMedia)`
	height: 140px;
`

const Text = styled.div``

const CardComp = ({ heading, text, left }) => (
	<S__CardComp>
		<CardActionArea>
			<S__CardMedia image={image} title="Contemplative Reptile" />
			<CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					Lizard
				</Typography>
				<Typography component="p">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button size="small" color="primary">
				Share
			</Button>
			<Button size="small" color="primary">
				Learn More
			</Button>
		</CardActions>
	</S__CardComp>
)

export default CardComp

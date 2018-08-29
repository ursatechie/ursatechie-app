import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Heading = styled.div`
	font-weight: bold;
`

const bull = <span>•</span>

const MaterialUIPage = () => (
	<React.Fragment>
		<Heading>Card>(CardContent>Typography)+(CardActions>Button)</Heading>

		<Card>
			<CardContent>
				<Typography color="textSecondary">Word of the Day</Typography>
				<Typography variant="headline" component="h2">
					be
					{bull}
					nev
					{bull}o{bull}
					lent
				</Typography>
				<Typography color="textSecondary">adjective</Typography>
				<Typography component="p">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>

		<Heading>Button[variant=raised]</Heading>
		<Button variant="raised" color="primary">
			Hello World
		</Button>
		<Heading>Button[variant=contained]</Heading>
		<Button variant="contained" color="primary">
			Hello World
		</Button>
	</React.Fragment>
)

export default MaterialUIPage

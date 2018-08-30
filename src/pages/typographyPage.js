import React from 'react'
import Link from 'gatsby-link'

import Typography from '@material-ui/core/Typography'

const TypographyPage = () => (
	<React.Fragment>
		<Link to="/">Go back to the homepage</Link>

		<Typography variant="display4">display4</Typography>
		<Typography variant="display3">display3</Typography>
		<Typography variant="display2">display2</Typography>
		<Typography variant="display1">display1</Typography>
		<Typography variant="headline">headline</Typography>
		<Typography variant="title">title</Typography>
		<Typography variant="subheading">subheading</Typography>
		<Typography variant="body2">body2</Typography>
		<Typography variant="body1">body1</Typography>
		<Typography variant="caption">caption</Typography>
		<Typography variant="button">button</Typography>
	</React.Fragment>
)

export default TypographyPage

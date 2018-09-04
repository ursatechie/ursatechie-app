import React from 'react'
import Link from 'gatsby-link'

import Typography from '@material-ui/core/Typography'
import CardComp from '../components/cardComp'

const IndexPage = ({ children, data }) => (
	<div>
		<Typography variant="headline" component="h1">
			Links
		</Typography>
		{data.site.siteMetadata.pageLinks.map((linkName, index) => {
			return (
				<div>
					{linkName == 'index' && <Link to={`/`}>Home</Link>}

					{linkName != 'index' && (
						<Link to={`/${linkName}/`}>
							{linkName} - {index}
						</Link>
					)}
				</div>
			)
		})}
		<Link to="/page-2/">Go to page 2</Link>
		<Link to="/page-3/">Go to page 3</Link>
		<Link to="/ui/">Go to UI</Link>
		<Link to="/material-ui/">Go to Material UI</Link>
		<Link to="/material-ui-2/">Go to Material UI 2</Link>
		<Link to="/typographypage/">Typography</Link>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">column-001</div>
				<div className="col-sm-3">column-002</div>
				<div className="col-sm-3">column-003</div>
				<div className="col-sm-3">column-004</div>
			</div>
		</div>
		<CardComp />
		hello
	</div>
)

export default IndexPage

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				pageLinks
			}
		}
	}
`

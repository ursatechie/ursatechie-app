import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
	<div>
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
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
	</div>
)

export default IndexPage

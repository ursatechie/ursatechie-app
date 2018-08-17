import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import './variables.css'
import PrimaryButton from '../components/primaryButton'
import ContentComponent from '../components/contentComponent'
import styled, { isStyledComponent } from 'styled-components'

const GlobalVariables = styled.div`
	--inner-container-width: 800px;
	--primary-color-light: lightpink;
	--primary-color: pink;
`

const Layout = ({ children, data }) => (
	<GlobalVariables>
		{/* <Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/> */}
		<Header siteTitle={data.site.siteMetadata.title} />

		<ContentComponent
			title="This is the Title"
			subtitle="This is the best Sub-Title you have seen in the world."
		/>

		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0,
			}}
		>
			{children()}
		</div>

		<div>
			<h1>Richard Hamming on Luck</h1>
			<div>
				<p>
					From Richard Hamming’s classic and must-read talk, “
					<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
						You and Your Research
					</a>
					”.
				</p>
				<blockquote>
					<p>
						There is indeed an element of luck, and no, there isn’t. The
						prepared mind sooner or later finds something important and does it.
						So yes, it is luck.{' '}
						<em>
							The particular thing you do is luck, but that you do something is
							not.
						</em>
					</p>
				</blockquote>
			</div>
			<p>Posted April 09, 2011</p>
		</div>
	</GlobalVariables>
)

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`

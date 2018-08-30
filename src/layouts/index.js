import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import PrimaryButton from '../components/primaryButton'
import ContentComponent from '../components/contentComponent'
import styled, { isStyledComponent } from 'styled-components'

import Paper from '@material-ui/core/Paper'

const GlobalVariables = styled.div`
	--inner-container-width: 960px;

	--h1: 36px;

	/* lavender */
	--primary: rgba(147, 149, 211, 1); /* #9395D3 */
	--primary-light: rgba(179, 183, 238, 1); /* #B3B7EE */

	/* red */
	--secondary: rgba(223, 35, 51, 1); /* #DF2333 */

	--white: rgba(251, 249, 255, 1); /* #FBF9FF */
	--gray: rgba(162, 163, 187, 1); /* #A2A3BB */
	--black: rgba(0, 8, 7, 1); /* #000807 */

	--color1: rgba(0, 8, 7, 1);
	--color2: rgba(162, 163, 187, 1);
	--color3: rgba(147, 149, 211, 1);
	--color4: rgba(179, 183, 238, 1);
	--color5: rgba(251, 249, 255, 1);
`

const Body = styled(Paper)`
	margin: 0 auto;
	max-width: var(--inner-container-width);
	padding: 0px 1.0875rem 1.45rem;
	padding-top: 0;
`

const Layout = ({ children, data }) => (
	<GlobalVariables>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<Header siteTitle={data.site.siteMetadata.title} />
		<ContentComponent
			heading="This is the Title"
			text="This is the best Sub-Title you have seen in the world."
		/>
		<Body elevation={10}>{children()}</Body>

		<Footer text="This is the footer text" />
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

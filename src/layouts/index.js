import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import PrimaryButton from '../components/primaryButton'
import styled, { isStyledComponent } from 'styled-components'

import Paper from '@material-ui/core/Paper'

import Imports from '../components/imports'
import SideNavigation from '../components/sideNavigation'

const GlobalVariables = styled.div`
	--inner-container-width: 960px;

	--h1: 36px;

	/* lavender */
	/* --primary: rgba(147, 149, 211, 1); #9395D3 */
	--primary: #094d92;
	/* --primary-light: rgba(179, 183, 238, 1); #B3B7EE */
	--primary-light: #2266ab;

	/* red */
	/* --secondary: rgba(223, 35, 51, 1); #DF2333 */
	--secondary: #df2333;

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

class Layout extends React.Component {
	state = {
		sideNavigationOpen: false,
	}

	toggleSideNavigation() {
		this.setState({ sideNavigationOpen: !this.state.sideNavigationOpen })
	}

	render() {
		const { children, data } = this.props

		return (
			<GlobalVariables>
				<Imports />

				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>

				<Header
					toggleDrawer={this.toggleSideNavigation.bind(this)}
					siteTitle={data.site.siteMetadata.title}
				/>

				<SideNavigation
					sideNavigationOpen={this.state.sideNavigationOpen}
					toggleSideNavigation={this.toggleSideNavigation.bind(this)}
					navItems={data.site.siteMetadata.navItems}
					navFooterText={data.site.siteMetadata.navFooterText}
				/>

				<Body elevation={10}>{children()}</Body>

				<Footer
					text="The Footer is using Paper can be used to build surface or other
					elements for your application."
					title="This is where the Footer should be at."
					toggleDrawer={this.toggleSideNavigation.bind(this)}
				/>
			</GlobalVariables>
		)
	}
}

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout

export const query = graphql`
	query SiteTitleQuery2 {
		site {
			siteMetadata {
				title
				navItems {
					icon
					text
				}
				navFooterText
			}
		}
	}
`

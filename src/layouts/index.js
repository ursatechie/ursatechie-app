import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import PrimaryButton from '../components/primaryButton'
import ContentComponent from '../components/contentComp'
import styled, { isStyledComponent } from 'styled-components'

import heroImage from '../images/jump.jpg'

import Paper from '@material-ui/core/Paper'

import InputTest from '../test/inputTest'
import AlertTest from '../test/alertTest'

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
		headerDrawerOpen: false,
	}

	toggleDrawer() {
		this.setState({ headerDrawerOpen: !this.state.headerDrawerOpen })
	}

	render() {
		const { children, data } = this.props

		return (
			<GlobalVariables>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
				<Header
					headerDrawerOpen={this.state.headerDrawerOpen}
					siteTitle={data.site.siteMetadata.title}
					toggleDrawer={this.toggleDrawer.bind(this)}
				/>

				<ContentComponent
					heading="Test Components"
					text="These components are to test out the functionality that you can implement using React."
					imgSrc={heroImage}
				>
					<InputTest />
					<AlertTest />
				</ContentComponent>

				<Body elevation={10}>{children()}</Body>
				<Footer
					text="The Footer is using Paper can be used to build surface or other
					elements for your application."
					title="This is where the Footer should be at."
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
			}
		}
	}
`

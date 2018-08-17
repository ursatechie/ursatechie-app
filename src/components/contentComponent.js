import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledContentWrapper = styled.div`
	--var: 'test';

	background: var(--primary-color-light);
	margin: 0 auto;

	a {
		color: black;
	}
`
const StyledContent = styled.div`
	background: var(--primary-color);
	margin: 0 auto;
	max-width: var(--inner-container-width);
`

const Content = ({ title, subtitle }) => (
	<StyledContentWrapper>
		<StyledContent>asdf</StyledContent>
	</StyledContentWrapper>
)

{
	/* <div
		style={{
			background: 'rebeccapurple',
			marginBottom: '1.45rem',
		}}
	>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none',
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</div> */
}

export default Content

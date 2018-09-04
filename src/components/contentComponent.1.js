import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledContentWrapper = styled.div`
	background: var(--primary-light);
	margin: 0 auto;

	a {
		color: black;
	}
`
const StyledContent = styled.div`
	align-items: ${props => (props.left ? 'flex-start' : 'center')};
	background: var(--primary);
	color: var(--white);
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: var(--inner-container-width);
	padding: 10px;
`

const Heading = styled.div`
	font-size: var(--h1);
	font-weight: bold;
`

const Text = styled.div``

const ContentComp = ({ heading, text, left }) => (
	<StyledContentWrapper>
		<StyledContent left={left}>
			<Heading>{heading}</Heading>
			<Text>{text}</Text>
		</StyledContent>
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

export default ContentComp

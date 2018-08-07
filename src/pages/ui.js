import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
	background: pink;
	margin: 0 auto;
	max-width: 640px;

	a {
		color: white;
	}
`

const Header = styled.header`
	align-items: center;
	background: rebeccapurple;
	color: white;
	display: flex;
	padding: 20px;
	height: 30px;
`

const Body = styled.div`
	background: #eee;
	height: 400px;
	padding: 20px;
`

const Footer = styled.div`
	align-items: center;
	background: #333;
	color: white;
	display: flex;
	height: 100px;
	padding: 20px;
`

const UIPage = () => (
	<Wrapper>
		<Header>
			<Link to="/">Go back to the homepage</Link>
		</Header>

		<Body>
			<h1>UI Toolkit</h1>
		</Body>

		<Footer>Footer Content</Footer>
	</Wrapper>
)

export default UIPage

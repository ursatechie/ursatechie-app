import React from 'react'
import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

const ContentWrapper = styled.div`
	background: var(--primary-light);
	margin: 0 auto;

	a {
		color: black;
	}
`
const S__Content = styled(Paper)`
	&& {
		align-items: ${props => (props.left ? 'flex-start' : 'center')};
		background: var(--primary);
		color: var(--white);
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: var(--inner-container-width);
		padding: 10px;
	}
`

const Heading = styled.div`
	font-size: var(--h1);
	font-weight: bold;
`

const Text = styled.div``

const Content = ({ heading, text, left }) => (
	<ContentWrapper>
		<S__Content elevation={5} left={left}>
			<Heading>{heading}</Heading>
			<Text>{text}</Text>
		</S__Content>
	</ContentWrapper>
)

export default Content

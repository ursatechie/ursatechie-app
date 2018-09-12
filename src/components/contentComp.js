import React from 'react'
import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

const ContentCompWrapper = styled.div`
	background: var(--primary-light);
	margin: 0 auto;

	a {
		color: black;
	}
`
const S__Paper = styled(Paper)`
	&& {
		align-items: ${props => (props.left ? 'flex-start' : 'center')};
		background: var(--primary);
		color: var(--white);
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: var(--inner-container-width);
		padding: 10px;

		> * {
			margin-bottom: 10px;
		}
	}
`

const Image = styled.img``

const Heading = styled.div`
	font-size: var(--h1);
	font-weight: bold;
`

const Text = styled.div``

const Content = ({ children, heading, text, left, imgSrc }) => (
	<ContentCompWrapper>
		<S__Paper elevation={5} left={left}>
			<Image src={imgSrc} />
			<Heading>{heading}</Heading>
			<Text>{text}</Text>
			{children}
		</S__Paper>
	</ContentCompWrapper>
)

export default Content

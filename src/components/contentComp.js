import React from 'react'
import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

const ContentCompWrapper = styled.div`
	background: var(--primary-light);
	margin: 0 calc(var(--body-padding-x) * -1);

	a {
		color: black;
	}
`
const S__Paper = styled(Paper)`
	&& {
		align-items: ${props => (props.center ? 'center' : 'flex-start')};
		background: ${props =>
			props.light ? 'var(--primary-light)' : 'var(--primary)'};
		color: var(--white);
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: var(--inner-container-width);
		padding: 50px;

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

const Content = ({ children, heading, light, text, center, imgSrc }) => (
	<ContentCompWrapper>
		<S__Paper elevation={5} light={light} center={center}>
			<Image src={imgSrc} />
			<Heading>{heading}</Heading>
			<Text>{text}</Text>
			{children}
		</S__Paper>
	</ContentCompWrapper>
)

export default Content

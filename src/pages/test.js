import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Icon from '@material-ui/core/Icon'

import heroImage from '../images/jump.jpg'
import ContentComponent from '../components/contentComp'
import InputTest from '../test/inputTest'
import AlertTest from '../test/alertTest'

const TestPage = () => (
	<div>
		<ContentComponent
			heading="Test Components"
			text="These components are to test out the functionality that you can implement using React."
			imgSrc={heroImage}
		>
			<Icon>star</Icon>
			<InputTest />
			<AlertTest />
		</ContentComponent>
	</div>
)

export default TestPage

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Icon from '@material-ui/core/Icon'

import heroImage from '../images/jump.jpg'
import ContentComponent from '../components/contentComp'
import * as Button from '../components/button'
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

			{/* <Button>Button</Button> */}

			<Button.Primary>Button</Button.Primary>

			<Button.Warning>Button</Button.Warning>

			<Button.Danger>Button</Button.Danger>

			<Button.Success>Button</Button.Success>
		</ContentComponent>
	</div>
)

export default TestPage

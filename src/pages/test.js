import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Icon from '@material-ui/core/Icon'

import heroImage from '../images/jump.jpg'

import ContentComponent from '../components/contentComp'
import Button from '../components/button'
import SnackBarComp from '../components/snackBarComp'

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

			<Button>Button</Button>

			<Button primary>Button</Button>

			<Button secondary>Button</Button>

			<Button light>Button</Button>

			<SnackBarComp message="Contact Me" />
		</ContentComponent>
	</div>
)

export default TestPage

import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'

const MyButton = styled(Button)`
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
	border-radius: 3;
	border: 0;
	color: 'white';
	height: 48;
	padding: '0 30px';
	box-shadow: '0 3px 5px 2px rgba(255, 105, 135, .3)';

	/* > span {
		width: 50%;
	} */
`

const LinearGradientButton = ({ text }) => (
	<MyButton variant="raised" color="primary">
		{text}
	</MyButton>
)

export default LinearGradientButton

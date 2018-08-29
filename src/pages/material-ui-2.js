import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const MyButton = styled(Button)`
	background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
	border-radius: 3;
	border: 0;
	color: 'white';
	height: 48;
	padding: '0 30px';
	box-shadow: '0 3px 5px 2px rgba(255, 105, 135, .3)';

	> span {
		width: 50%;
	}
`

const MaterialUIPage2 = () => (
	<React.Fragment>
		<MyButton variant="raised" color="primary">
			hello
		</MyButton>
	</React.Fragment>
)

export default MaterialUIPage2

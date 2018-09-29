import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

class SnackbarComp extends React.Component {
	state = {
		open: false,
		vertical: 'bottom',
		horizontal: 'right',
	}

	handleClick = state => () => {
		this.setState({ open: true, ...state })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		const { vertical, horizontal, open } = this.state
		const { message } = this.props
		return (
			<div>
				<Button
					onClick={this.handleClick({
						vertical: 'bottom',
						horizontal: 'right',
					})}
				>
					Bottom-Right
				</Button>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id="message-id">{message}</span>}
					action={[
						<Button
							key="Link"
							color="secondary"
							size="small"
							onClick={this.handleClose}
						>
							LINK
						</Button>,
						<IconButton
							key="close"
							aria-label="Close"
							color="inherit"
							onClick={this.handleClose}
						>
							<Icon>close</Icon>
						</IconButton>,
					]}
				/>
			</div>
		)
	}
}

export default SnackbarComp

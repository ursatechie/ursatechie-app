import React from 'react'
import styled from 'styled-components'

// const TYPES = {
// 	PRIMARY: 'primary',
// 	WARNING: 'warning',
// 	DANGER: 'danger',
// 	SUCCESS: 'success',
// }

// export const SIZES = {
// 	SMALL: 'small',
// 	MEDIUM: 'medium',
// 	LARGE: 'large',
// }

// https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b
const Button = styled.button`
	border-radius: 4px;
	color: ${props => (props.color ? 'white' : '')};

	&:hover {
		cursor: pointer;
	}

	${props =>
		props.primary &&
		`
		background: var(--primary);
		color: white;
	`};

	${props =>
		props.secondary &&
		`
		background: var(--secondary);
		color: white;
	`};

	${props =>
		props.light &&
		`
		background: var(--primary-light);
		color: white;
	`};
`

// classnames=(
// 	styles.button,
// 	styles[ buttonType ]
// 	styles[ buttonSize || SIZES.MEDIUM ]
//   )

// const Button2 = ({
// 	children,
// 	onClick,
// 	type,
// 	disabled,
// 	buttonType,
// 	buttonSize,
// }) => (
// 	<Button type={type} disabled={disabled} onClick={onClick}>
// 		{children} - hey
// 	</Button>
// )

// const Primary = styled(Button2)`
// 	background: var(--primary);
// 	color: var(--white);
// `

// const Warning = styled(Button2)`
// 	background: var(--warning);
// 	color: var(--white);
// `

// const Danger = styled(Button2)`
// 	background: var(--danger);
// 	color: var(--white);
// `

// const Success = styled(Button2)`
// 	&& {
// 		background: var(--success) !important;
// 		color: black !important;
// 	}
// `

// export const Primary = props => (
// 	<Button {...props} buttonType={TYPES.PRIMARY} />
// )
// export const Warning = props => (
// 	<Button {...props} buttonType={TYPES.WARNING} />
// )
// export const Danger = props => (
// 	<Button {...props} buttonType={TYPES.DANGER} />
// )
// export const Success = props => (
// 	<Button {...props} buttonType={TYPES.SUCCESS} />
// )

export default Button

// export { Primary, Warning, Danger, Success }

import Typography from 'typography'
// import oceanBeachTheme from 'typography-theme-ocean-beach'

// https://kyleamathews.github.io/typography.js/
// const typography = new Typography({ baseFontSize: '14px' })
// oceanBeachTheme.baseFontSize = '14px'
// const typography = new Typography(oceanBeachTheme)

const typography = new Typography({
	baseFontSize: '12px',
	baseLineHeight: 1.666,
	headerFontFamily: [
		'Roboto Slab',
		'Roboto',
		'Avenir Next',
		'Helvetica Neue',
		'Segoe UI',
		'Helvetica',
		'Arial',
		'sans-serif',
	],
	bodyFontFamily: ['Roboto', 'Georgia', 'serif'],
})

export default typography

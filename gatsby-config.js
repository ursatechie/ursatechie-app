module.exports = {
	siteMetadata: {
		title: 'Documentation',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js',
			},
		},
	],
	pathPrefix: '/ursatechie-app',
}

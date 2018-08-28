module.exports = {
	siteMetadata: {
		// title: 'Unity',
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
		`gatsby-plugin-react-next`,
		{
			resolve: `@wapps/gatsby-plugin-material-ui`,
			options: {
				options: {
					theme: {
						primaryColor: '#9c27b0',
					},
					productionPrefix: 'c',
				},
			},
		},
	],
	pathPrefix: '/ursatechie-app',
}

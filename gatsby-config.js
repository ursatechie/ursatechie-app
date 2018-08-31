module.exports = {
	siteMetadata: {
		// title: 'Unity',
		title: 'Documentation',
		pageLinks: [
			'index',
			'404',
			'material-ui',
			'typographyPage',
			'index',
			'page-2',
			'ui',
			'material-ui-2',
			'page-3',
		],
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

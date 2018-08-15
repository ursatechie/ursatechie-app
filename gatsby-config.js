module.exports = {
	siteMetadata: {
		title: 'Documentation',
		hello: 'hellos',
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

module.exports = {
	siteMetadata: {
		title: 'Documentation',
		// https://material.io/tools/icons/?style=baseline
		navItems: [
			{
				link: '/',
				text: 'Home',
				icon: 'face',
			},
			{
				link: '/projects',
				text: 'Projects',
				icon: 'work',
			},
			{
				link: '/typographyPage',
				text: 'Typography',
				icon: 'font_download',
			},
			{
				link: '/test',
				text: 'Test',
				icon: 'fitness_center',
			},
		],
		navFooterText: 'Tyler Wong J, 2018',
		pageLinks: [
			'projects',
			'index',
			'test',
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

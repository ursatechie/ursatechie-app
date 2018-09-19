module.exports = {
	siteMetadata: {
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
		projects: [
			{
				img: '1asdfasdfas',
				title: 'title',
				author: 'author',
			},
			{
				img: '21asdfasdfas',
				title: 'title',
				author: 'author',
			},
			{
				img: '31asdfasdfas',
				title: 'title',
				author: 'author',
			},
			{
				img: '41asdfasdfas',
				title: 'title',
				author: 'asdfs',
			},
			{
				img: '51asdfasdfas',
				title: 'title',
				author: 'author',
			},
		],
		navItems: [
			{
				icon: 'inbox',
				text: 'Home',
			},
			{
				icon: 'drafts',
				text: 'Typography',
			},
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

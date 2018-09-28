const images = require.context('../images', true)
const imagePath = name => images(name, true)

// then within your component
// console.log(imagePath('./user.png')) // it's relative to context

// import * as images from '../images'

var projects = {
	projects: [
		{
			img: imagePath('./contemplative-reptile.jpg'),
			title: 'title',
			author: 'author',
		},
		{
			img: imagePath('./contemplative-reptile.jpg'),
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
}

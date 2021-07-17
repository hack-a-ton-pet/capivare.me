export interface learnCardProps {
	id: number
	title: string
	text: string
}

const learnCards: learnCardProps[] = [
	{
		id: 1,
		title: 'Título 1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque cursus pretium. Integer maximus suscipit odio, et mattis diam iaculis at. Vestibulum porta, massa nec tristique faucibus, nunc nunc posuere nulla, eget facilisis diam elit at sapien. \nInteger ipsum metus, congue quis mauris commodo, sodales mollis nulla. Duis vel aliquam risus. Mauris massa massa, luctus posuere pharetra sit amet, convallis ac purus.',
	},
	{
		id: 2,
		title: 'Título 2',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque cursus pretium. Integer maximus suscipit odio, et mattis diam iaculis at. Vestibulum porta, massa nec tristique faucibus, nunc nunc posuere nulla, eget facilisis diam elit at sapien. \nInteger ipsum metus, congue quis mauris commodo, sodales mollis nulla. Duis vel aliquam risus. Mauris massa massa, luctus posuere pharetra sit amet, convallis ac purus.',
	},
	{
		id: 3,
		title: 'Título 3',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque cursus pretium. Integer maximus suscipit odio, et mattis diam iaculis at. Vestibulum porta, massa nec tristique faucibus, nunc nunc posuere nulla, eget facilisis diam elit at sapien. \n Integer ipsum metus, congue quis mauris commodo, sodales mollis nulla. Duis vel aliquam risus. Mauris massa massa, luctus posuere pharetra sit amet, convallis ac purus.',
	},
]

export default learnCards

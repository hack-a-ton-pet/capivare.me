import PathConstants from '../PathConstants'

export interface menuCardProps {
	title: string
	image: string
	text: string
	small?: boolean
	path: string
}

const menuCards: menuCardProps[] = [
	{
		title: 'Aprenda',
		image: 'learn_card.png',
		text: 'Texto do Aprenda Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		path: PathConstants.LEARN,
	},
	{
		title: 'Avalie',
		image: 'evaluate_card.png',
		text: 'Texto do Avalie Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		path: '/nothing',
	},
]

export default menuCards

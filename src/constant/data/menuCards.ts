export interface menuCardProps {
	title: string
	image: string
	text: string
	small?: boolean
}

const menuCards: menuCardProps[] = [
	{
		title: 'Aprenda',
		image: 'learn_card.png',
		text: 'Texto do Aprenda Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	},
	{
		title: 'Avalie',
		image: 'evaluate_card.png',
		text: 'Texto do Avalie Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	},
	{
		title: 'Conquistas',
		image: 'achievements_card.png',
		text: 'Texto das Conquistas Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		small: true,
	},
]

export default menuCards

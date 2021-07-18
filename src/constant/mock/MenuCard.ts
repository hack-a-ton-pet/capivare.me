import Path from '../Path'

export interface menuCardProps {
	title: string
	image: string
	text: string
	small?: boolean
	path: string
}

export const MENU_CARDS: menuCardProps[] = [
	{
		title: 'Aprenda',
		image: 'learn_card.png',
		text: 'Nessa sessão, aprenda mais sobre a organização política do Brasil.',
		path: Path.LEARN,
	},
	{
		title: 'Avalie',
		image: 'evaluate_card.png',
		text: 'Essa sessão é destinada a acompanhar as metas dos atuais representantes do nosso país',
		path: '/nothing',
	},
]

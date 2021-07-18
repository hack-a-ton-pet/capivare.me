export interface cardsLearnPathProps {
	id: 'section1' | 'section2' | 'section3' | 'section4'
	title: string
	description: string
}

export const cardsLearnPath: cardsLearnPathProps[] = [
	{
		id: 'section1',
		title: 'Tripartição de poderes',
		description:
			'Você sabia que a democracia é dividida em 3 poderes? Legislativo, Executivo e Judiciário',
	},
	{
		id: 'section2',
		title: 'Constituição Federal',
		description:
			'Você conhece a principal lei do nosso país? Sabe quais são nossos direitos e deveres?',
	},
	{
		id: 'section3',
		title: 'Leis',
		description:
			'Você sabe como uma lei é criada? Onde podemos ver todas as leis?',
	},
	{
		id: 'section4',
		title: 'Cargos políticos',
		description:
			'Você sabe quais as reponsabilidades de cada cargo político que elegemos?',
	},
]

import LearnPathModel from '../../type/quiz/LearnPathModel'
import Lesson from '../../type/quiz/Lesson'

const StatePowerLessons: Lesson[] = [
	{
		id: 'lp01l01',
		sections: [
			{
				title: 'História',
				text: 'Há muitos anos, vários pensadores já debatiam sobre a melhor forma de organizar os poderes políticos de uma nação. O filósofo francês Montesquieu percebeu que, se uma única pessoa, ou grupo de pessoas, reunisse os deveres de criar leis, de aplicá-las e de fazer a administração pública, nada iria funcionar.',
			},
			{
				title: 'Divisão',
				text: 'Com isso, ele desenvolveu a ideia de dividir essas responsabilidades em três grupos, os três poderes: Executivo, Legislativo e Judiciário. São eles que norteiam as ações políticas em cada uma das esferas: federal, estadual e municipal e devem ser independentes e harmônicos entre si.',
			},
			{
				title: 'Divisão',
				text: 'Nesse sentido de harmonia, foi pensado também que nenhum poder deveria estar acima dos outros. Assim, com o objetivo de garantir o equilíbrio, foi criado o sistema de freios e contrapesos, uma série de mecanismos para evitar abusos de qualquer um dos Poderes.',
			},
			{
				title: 'No Brasil',
				text: 'Esse é o modelo que utilizamos no Brasil, conforme descrito no artigo 2º da nossa Constituição Federal, a lei suprema do país. Além disso, trata-se de uma Cláusula Pétrea, aquelas que não podem ser modificadas.',
			},
		],
		quiz: {
			items: [
				{
					question:
						'Qual destes é um dos objetivos da Separação dos Poderes?',
					correctAnswerId: 0,
					anwers: [
						{
							id: 0,
							text: 'Evitar a centralização das responsabilidades em um única pessoa, ou grupo de pessoas',
						},
						{
							id: 1,
							text: 'Garantir que os poderes fiquem concentrados em um pequeno grupo de pessoas',
						},
						{
							id: 2,
							text: 'Facilitar a organização dos políticos em cada construção governamental',
						},
						{ id: 3, text: 'Os poderes não são separados atualmente' },
					],
				},
				{
					question: 'Qual destes não é um dos poderes?',
					correctAnswerId: 7,
					anwers: [
						{
							id: 4,
							text: 'Poder Legislativo',
						},
						{
							id: 5,
							text: 'Poder Executivo',
						},
						{
							id: 6,
							text: 'Poder Judiciário',
						},
						{
							id: 7,
							text: 'Poder Supremo',
						},
					],
				},
				{
					question:
						'Existe uma hierarquia entre os poderes, um está acima do outro.',
					correctAnswerId: 9,
					anwers: [
						{
							id: 8,
							text: 'Verdadeiro',
						},
						{
							id: 9,
							text: 'Falso',
						},
					],
				},
				{
					question:
						'No Brasil, a separação dos poderes é um princípio constitucional que não pode ser alterado.',
					correctAnswerId: 10,
					anwers: [
						{
							id: 10,
							text: 'Verdadeiro',
						},
						{
							id: 11,
							text: 'Falso',
						},
					],
				},
			],
		},
	},
	{
		id: 'lp01l02',
		sections: [
			{
				title: 'Poder Executivo',
				text: 'Os integrantes do Poder Executivo são os responsáveis por fazer a administração do Estado. Seu dever é governar o povo, executando as leis, propondo planos de ação e administrando os interesses públicos.',
			},
			{
				title: 'Poder Legislativo',
				text: 'Aos integrantes do Poder Legislativo, são reservadas as responsabilidades de legislar (criar e aprovar leis) e fiscalizar o Executivo.  Sendo as duas tarefas igualmente importantes.',
			},
			{
				title: 'Poder Judiciário',
				text: 'Os integrantes do Poder Judiciário são aqueles que julgam casos de acordo com as regras constitucionais e com as leis criadas pelo Legislativo. Cabe a eles o papel de interpretar e aplicar a lei a um caso concreto.',
			},
		],
		quiz: {
			items: [
				{
					question:
						'O Poder Executivo é aquele que governa e, portanto, mais importante.',
					correctAnswerId: 13,
					anwers: [
						{ id: 12, text: 'Verdadeiro' },
						{ id: 13, text: 'Falso' },
					],
				},
				{
					question:
						'Cabe ao Poder Legislativo fazer a fiscalização do Poder Executivo.',
					correctAnswerId: 14,
					anwers: [
						{ id: 14, text: 'Verdadeiro' },
						{ id: 15, text: 'Falso' },
					],
				},
				{
					question:
						'Cabe ao Poder Judiciário interpretar e aplicar leis a casos concretos.',
					correctAnswerId: 16,
					anwers: [
						{ id: 16, text: 'Verdadeiro' },
						{ id: 17, text: 'Falso' },
					],
				},
			],
		},
	},
	{
		id: 'lp01l03',
		sections: [
			{
				title: 'Freios e Contrapesos',
				text: 'O filósofo francês Montesquieu, responsável pela idealização dos Três Poderes, afirmou: “Todo homem que detém o poder tende a abusar dele”. Por isso, a necessidade de separar os poderes do Estado. \nAlém disso, surge também a necessidade da criação de mecanismos que garantam que nenhum dos poderes fique acima dos outros, são os chamados Freios e Contrapesos.',
			},
			{
				title: 'Alguns exemplos',
				text: '- O Poder Executivo em relação ao Legislativo: em casos de urgência, o Presidente da República pode adotar as chamadas Medidas Provisórias, que possuem força de lei e devem ser imediatamente submetidas ao Congresso Nacional.',
			},
			{
				title: 'Alguns exemplos',
				text: 'O Poder Legislativo em relação ao Executivo: é dever do legislativo processar e julgar o Presidente e o Vice-Presidente da República, além de promover o processo de impeachment.\nO Poder Judiciário em relação ao Legislativo: cabe ao Supremo Tribunal Federal submeter a julgamento os deputados e senadores.',
			},
			{
				title: 'Funções atípicas',
				text: 'Esses mecanismos são também chamados de Funções Atípicas dos poderes, uma vez que fogem dos deveres comuns. Eventualmente, o judiciário legisla ou administra, o legislativo julga e administra e o executivo legisla e julga. Existem diversas outras medidas de interação entre os poderes, sempre tendo como objetivo manter o equilíbrio.',
			},
		],
		quiz: {
			items: [
				{
					question:
						'Quem é responsável por processar e julgar o Presidente da República?',
					correctAnswerId: 19,
					anwers: [
						{ id: 18, text: 'Poder Executivo' },
						{ id: 19, text: 'Poder Legislativo' },
						{ id: 20, text: 'Poder Judiciário' },
						{
							id: 21,
							text: 'Ninguém, o Presidente está acima de julgamentos',
						},
					],
				},
				{
					question:
						'Legislar não é uma função exclusiva do Poder Legislativo',
					correctAnswerId: 22,
					anwers: [
						{ id: 22, text: 'Verdadeiro' },
						{ id: 23, text: 'Falso' },
					],
				},
				{
					question:
						'Uma Medida Provisória é uma forma do Presidente da República legislar e não precisa ser submetida ao Congresso Nacional.',
					correctAnswerId: 25,
					anwers: [
						{ id: 24, text: 'Verdadeiro' },
						{ id: 25, text: 'Falso' },
					],
				},
				{
					question: 'Qual o objetivo dos Freios e Contrapesos?',
					correctAnswerId: 27,
					anwers: [
						{
							id: 26,
							text: 'Dar ao Legislativo o poder de sobrepor-se aos demais',
						},
						{
							id: 27,
							text: 'Garantir o equilíbrio entre os poderes',
						},
						{
							id: 28,
							text: 'Aumentar a velocidade na aprovação de leis, já que o judiciário e o executivo também podem legislar',
						},
						{
							id: 29,
							text: 'Garantir que o presidente assuma o papel de destaque no governo',
						},
					],
				},
			],
		},
	},
]

const StatePowersPath: LearnPathModel = {
	id: 'lp01',
	title: 'Tripartição dos Poderes',
	desc: 'Você sabia que a democracia é dividida em 3 poderes? Legislativo, Executivo e Judiciário',
	lessons: StatePowerLessons,
}

const LearnPahtList: LearnPathModel[] = [StatePowersPath]
export default LearnPahtList

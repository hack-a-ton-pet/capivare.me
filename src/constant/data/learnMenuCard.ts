import PathConstants from '../PathConstants'

export interface learnMenuCardProps {
	id: string
	status: 'blocked' | 'done' | 'open'
	text: string
	path: string
}

const learnMenuCards: learnMenuCardProps[] = [
	{
		id: 'section-1',
		status: 'blocked',
		path: `${PathConstants.LESSON}/1`,
		text: 'Lição 1',
	},
	{
		id: 'section-1',
		status: 'done',
		path: `${PathConstants.LESSON}/2`,
		text: 'Lição 2',
	},
	{
		id: 'section-1',
		status: 'open',
		path: `${PathConstants.LESSON}/3`,
		text: 'Lição 3',
	},
	{
		id: 'section-1',
		status: 'blocked',
		path: `${PathConstants.LESSON}/4`,
		text: 'Lição 4',
	},
]

export default learnMenuCards

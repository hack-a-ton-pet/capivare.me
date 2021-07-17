import PathConstants from '../PathConstants'

export interface learnMenuCardProps {
	id: string
	status: 'blocked' | 'done' | 'open'
	text: string
	path: string
}

const learnMenuCards: learnMenuCardProps[] = [
	{
		id: '1',
		status: 'blocked',
		path: PathConstants.LESSON,
		text: 'Lição 1',
	},
	{
		id: '2',
		status: 'done',
		path: PathConstants.LESSON,
		text: 'Lição 2',
	},
	{
		id: '3',
		status: 'open',
		path: PathConstants.LESSON,
		text: 'Lição 3',
	},
	{
		id: '4',
		status: 'blocked',
		path: PathConstants.LESSON,
		text: 'Lição 4',
	},
]

export default learnMenuCards

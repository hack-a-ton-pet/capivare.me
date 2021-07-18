import Lesson from './Lesson'

export default interface LearnPath {
	id: string
	title: string
	desc: string
	lessons: Lesson[]
}

import Lesson from './Lesson'

export default interface LearnPathModel {
	id: string
	title: string
	desc: string
	lessons: Lesson[]
}

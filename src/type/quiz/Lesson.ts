import LessonSection from './LessonSection'
import Quiz from './Quiz'

export default interface Lesson {
	id: string
	sections: LessonSection[]
	quiz: Quiz
}

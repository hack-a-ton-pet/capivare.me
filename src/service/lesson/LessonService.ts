import Lesson from '../../type/quiz/Lesson'
import LearnPathService from '../learn_path/LearnPathService'

class LessonService {
	getById = (lessonId: string): Lesson | undefined => {
		const lessons = this.getAllLessons()
		const queryResult = lessons.filter(lesson => lesson.id === lessonId)
		return queryResult.length > 0 ? queryResult[0] : undefined
	}

	private getAllLessons = (): Lesson[] => {
		return LearnPathService.getAll().reduce(
			(acc, learnPath) => acc.concat(learnPath.lessons),
			[] as Lesson[],
		)
	}
}

export default new LessonService()

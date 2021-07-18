import LearnPathList from '../../constant/data/LearnPath'
import Lesson from '../../type/quiz/Lesson'

class LessonService {
	getById = (lessonId: string): Lesson | undefined => {
		const lessons = this.getAllLessons()
		const queryResult = lessons.filter(lesson => lesson.id === lessonId)
		return queryResult.length > 0 ? queryResult[0] : undefined
	}

	private getAllLessons = (): Lesson[] => {
		return LearnPathList.reduce(
			(acc, learnPath) => acc.concat(learnPath.lessons),
			[] as Lesson[],
		)
	}
}

export default new LessonService()

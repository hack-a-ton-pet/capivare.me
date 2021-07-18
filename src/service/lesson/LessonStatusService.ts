import User from '../../type/entity/User'
import Lesson from '../../type/quiz/Lesson'

class LessonStatusService {
	isDone = (
		user: User,
		lessons: Lesson[],
		currentLessonIndex: number,
	): boolean => {
		const currentLesson = lessons[currentLessonIndex]
		return this.lessonIsInUserCompletedLessons(user, currentLesson.id)
	}

	private lessonIsInUserCompletedLessons = (
		user: User,
		lessonId: string,
	): boolean => {
		return user.pathProgresses.some(pathProgress =>
			pathProgress.completedLessonIds.some(
				completedLessonId => completedLessonId === lessonId,
			),
		)
	}
}

export default new LessonStatusService()

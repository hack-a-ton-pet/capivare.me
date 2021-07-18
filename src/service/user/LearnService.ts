import UserRepository from '../../repository/UserRepository'
import User from '../../type/entity/User'
import LearnPathProgress from '../../type/entity/UserProgress'
import Lesson from '../../type/quiz/Lesson'
import LearnPathService from '../learn_path/LearnPathService'

class LearnService {
	saveLesson = (user: User, lesson: Lesson, score: number) => {
		if (this.isScoreLessThanMin(score)) return

		const learnPath = LearnPathService.getByLessonId(lesson.id)

		if (!learnPath) return

		const pathProgressQuery = user.pathProgresses.filter(
			pathProgress => pathProgress.learnPathId === learnPath.id,
		)

		if (pathProgressQuery.length > 0) {
			const pathProgress = pathProgressQuery[0]

			const isAlreadyDone = pathProgress.completedLessonIds.some(
				lessonId => lessonId === lesson.id,
			)

			if (isAlreadyDone) return

			pathProgress.completedLessonIds.push(lesson.id)
			pathProgress.completed =
				pathProgress.completedLessonIds.length === learnPath.lessons.length
		} else {
			const pathProgress: LearnPathProgress = {
				completed: learnPath.lessons.length === 1,
				learnPathId: learnPath.id,
				completedLessonIds: [lesson.id],
			}
			user.pathProgresses.push(pathProgress)
		}

		UserRepository.save(user)
	}

	isScoreHigherThanMin = (score: number) => {
		return score >= 70
	}

	isScoreLessThanMin = (score: number) => {
		return !this.isScoreHigherThanMin(score)
	}
}

export default new LearnService()

import User from '../../type/entity/User'
import LearnPathService from '../learn_path/LearnPathService'

class LearnPathProgressService {
	calc = (user: User | undefined, learnPathId: string) => {
		if (user === undefined) return 0
		const learnPathNumberOfLessons =
			this.getLearnPathNumberOfLessons(learnPathId)
		const userLearnPathNumberOfCompletedLessons =
			this.getUserNumberOfCompletedLessonsByLearnPath(user, learnPathId)
		if (userLearnPathNumberOfCompletedLessons === 0) return 0
		return (
			(userLearnPathNumberOfCompletedLessons / learnPathNumberOfLessons) *
			100
		)
	}

	isCompleted = (user: User | undefined, learnPathId: string) => {
		if (user === undefined) return 0
		const learnPathNumberOfLessons =
			this.getLearnPathNumberOfLessons(learnPathId)
		const userLearnPathNumberOfCompletedLessons =
			this.getUserNumberOfCompletedLessonsByLearnPath(user, learnPathId)

		return learnPathNumberOfLessons === userLearnPathNumberOfCompletedLessons
	}

	private getUserNumberOfCompletedLessonsByLearnPath = (
		user: User,
		learnPathId: string,
	): number => {
		return user.pathProgresses
			.filter(pathProgress => pathProgress.learnPathId === learnPathId)
			.reduce((acc, pathProgress) => {
				return acc + pathProgress.completedLessonIds.length
			}, 0)
	}

	private getLearnPathNumberOfLessons = (learnPathId: string): number => {
		return LearnPathService.getAll()
			.filter(learnPath => learnPath.id === learnPathId)
			.reduce((acc, learnPath) => {
				return acc + learnPath.lessons.length
			}, 0)
	}
}

export default new LearnPathProgressService()

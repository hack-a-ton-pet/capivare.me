import User from '../../type/entity/User'
import LearnPathService from '../learn_path/LearnPathService'

class GeneralProgressService {
	calc = (user: User | undefined) => {
		if (user === undefined) return 0
		const total = this.getTotalNumberOfLessons()
		const userTotal = this.getUserTotalNumberOfCompletedLessons(user)
		if (userTotal === 0) return 0
		return (userTotal / total) * 100
	}

	private getUserTotalNumberOfCompletedLessons = (user: User): number => {
		return user.pathProgresses.reduce((acc, pathProgress) => {
			return acc + pathProgress.completedLessonIds.length
		}, 0)
	}

	private getTotalNumberOfLessons = (): number => {
		return LearnPathService.getAll().reduce((acc, learnPath) => {
			return acc + learnPath.lessons.length
		}, 0)
	}
}

export default new GeneralProgressService()

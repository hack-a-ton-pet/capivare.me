import LearnPathList from '../../constant/data/LearnPath'
import User from '../../type/entity/User'

class GeneralProgressService {
	calc = (user: User | undefined) => {
		if (user === undefined) return 0
		const total = this.getTotalNumberOfLessons()
		const userTotal = this.getUserTotalNumberOfCompletedLessons(user)
		if (userTotal === 0) return 0
		return (total / userTotal) * 100
	}

	private getUserTotalNumberOfCompletedLessons = (user: User): number => {
		return user.pathProgresses.reduce((acc, pathProgress) => {
			return acc + pathProgress.completedLessonIds.length
		}, 0)
	}

	private getTotalNumberOfLessons = (): number => {
		return LearnPathList.reduce((acc, learnPath) => {
			return acc + learnPath.lessons.length
		}, 0)
	}
}

export default new GeneralProgressService()

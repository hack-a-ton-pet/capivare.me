import { learnPathList, statePowersPath } from '../../constant/mock/LearnPath'
import LearnPathModel from '../../type/quiz/LearnPathModel'

class LearnPathService {
	getById = (learnPathId: string): LearnPathModel | undefined => {
		const queryResult = this.getAll().filter(
			learnPath => learnPath.id === learnPathId,
		)
		return queryResult.length > 0 ? queryResult[0] : undefined
	}

	getByLessonId = (lessonId: string): LearnPathModel | undefined => {
		const queryResult = this.getAll().filter(learnPath =>
			learnPath.lessons.some(lesson => lesson.id === lessonId),
		)
		return queryResult.length > 0 ? queryResult[0] : undefined
	}

	getAll = (): LearnPathModel[] => {
		return learnPathList
	}

	getStatePowersLearnPathId = () => {
		return statePowersPath.id
	}
}

export default new LearnPathService()

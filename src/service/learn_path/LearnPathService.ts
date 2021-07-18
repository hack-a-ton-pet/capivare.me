import {
	LEARN_PATH_LIST,
	PATH_STATE_POWERS,
} from '../../constant/mock/LearnPath'
import LearnPath from '../../type/quiz/LearnPath'

class LearnPathService {
	getById = (learnPathId: string): LearnPath | undefined => {
		const queryResult = this.getAll().filter(
			learnPath => learnPath.id === learnPathId,
		)
		return queryResult.length > 0 ? queryResult[0] : undefined
	}

	getByLessonId = (lessonId: string): LearnPath | undefined => {
		const queryResult = this.getAll().filter(learnPath =>
			learnPath.lessons.some(lesson => lesson.id === lessonId),
		)
		return queryResult.length > 0 ? queryResult[0] : undefined
	}

	getAll = (): LearnPath[] => {
		return LEARN_PATH_LIST
	}

	getStatePowersLearnPathId = () => {
		return PATH_STATE_POWERS.id
	}
}

export default new LearnPathService()

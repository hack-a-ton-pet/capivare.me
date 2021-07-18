import LearnPathList from '../../constant/data/LearnPath'
import LearnPathModel from '../../type/quiz/LearnPathModel'

class LearnPathService {
	getById = (learnPathId: string): LearnPathModel | undefined => {
		const queryResult = LearnPathList.filter(
			learnPath => learnPath.id === learnPathId,
		)
		return queryResult.length > 0 ? queryResult[0] : undefined
	}
}

export default new LearnPathService()

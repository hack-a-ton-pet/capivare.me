import React, { useContext } from 'react'
import ArrowDownIconButton from '../../component/icon_button/arrow_down'
import CapiHorizontalProgress from '../../component/progress/horizontal_progress'
import CapiLessonCardButton from '../../component/lesson_card_button'
import { LESSON_PREFIX } from '../../constant/data/Lesson'
import { authStore } from '../../context/AuthContext'
import LearnPathProgressService from '../../service/progress/LearnPathProgressService'
import LearnPathService from '../../service/learn_path/LearnPathService'
import { useParams } from 'react-router-dom'
import PathConstants from '../../constant/PathConstants'
import LessonStatusService from '../../service/lesson/LessonStatusService'
import LearnPathModel from '../../type/quiz/LearnPathModel'
import User from '../../type/entity/User'
import HistoryService from '../../service/history/HistoryService'
import './styles.css'

const renderLessons = (learnPath: LearnPathModel, user: User) => {
	let lastIsDone = true
	return learnPath.lessons.map((e, index) => {
		const isDone = LessonStatusService.isDone(user, learnPath.lessons, index)
		const render = (
			<CapiLessonCardButton
				text={`${LESSON_PREFIX} ${index + 1}`}
				status={isDone ? 'done' : lastIsDone ? 'open' : 'blocked'}
				id={e.id}
				key={index}
				onClick={() =>
					HistoryService.push(`${PathConstants.LESSON}/${e.id}`)
				}
			/>
		)
		lastIsDone = isDone

		return render
	})
}

interface LessonParam {
	id: string
}

const Lesson: React.FC = () => {
	const { id } = useParams<LessonParam>()
	const { state } = useContext(authStore)
	const user = state.user
	const learnPath = LearnPathService.getById(id)

	const handleBackToMenu = () => {
		HistoryService.push(PathConstants.LEARN)
	}

	return (
		<div className='lesson_menu'>
			{user !== undefined && learnPath !== undefined && (
				<>
					<ArrowDownIconButton
						color='primary'
						onClick={handleBackToMenu}
					/>
					<CapiHorizontalProgress
						percentage={LearnPathProgressService.calc(user, id)}
					/>
					<div className='learn_menu_cards'>
						{renderLessons(learnPath, user)}
					</div>
				</>
			)}
		</div>
	)
}

export default Lesson

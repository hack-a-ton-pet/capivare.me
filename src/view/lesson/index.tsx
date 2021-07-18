import React, { useContext } from 'react'
import ArrowDownIconButton from '../../component/icon_button/arrow_down'
import CapiHorizontalProgress from '../../component/progress/horizontal_progress'
import CapiLessonCardButton from '../../component/lesson_card_button'
import { IN_DEVELOPMENT, LESSON_PREFIX } from '../../constant/component/Lesson'
import { authStore } from '../../context/Auth'
import LearnPathProgressService from '../../service/progress/LearnPathProgressService'
import LearnPathService from '../../service/learn_path/LearnPathService'
import { useParams } from 'react-router-dom'
import Path from '../../constant/Path'
import LessonStatusService from '../../service/lesson/LessonStatusService'
import LearnPath from '../../type/quiz/LearnPath'
import User from '../../type/entity/User'
import HistoryService from '../../service/history/HistoryService'
import './styles.css'

const renderLessons = (learnPath: LearnPath, user: User) => {
	let lastIsDone = true
	return learnPath.lessons.map((e, index) => {
		const isDone = LessonStatusService.isDone(user, learnPath.lessons, index)
		const render = (
			<CapiLessonCardButton
				text={`${LESSON_PREFIX} ${index + 1}`}
				status={isDone ? 'done' : lastIsDone ? 'open' : 'blocked'}
				id={e.id}
				key={index}
				onClick={() => HistoryService.push(`${Path.LESSON}/${e.id}`)}
			/>
		)
		lastIsDone = isDone

		return render
	})
}

const renderInDevelopmentMessage = () => {
	return <h1>{IN_DEVELOPMENT}</h1>
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
		HistoryService.push(Path.LEARN)
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
						{learnPath.lessons.length > 0
							? renderLessons(learnPath, user)
							: renderInDevelopmentMessage()}
					</div>
				</>
			)}
		</div>
	)
}

export default Lesson

import React from 'react'
import GoBackIconButton from '../../component/icon_button/go_back'
import './styles.css'
import ArrowDownIconButton from '../../component/icon_button/arrow_down'
import CapiHorizontalProgress from '../../component/progress/horizontal_progress'
import CapiLessonCardButton from '../../component/lesson_card_button'
import learnMenuCards from '../../constant/data/learnMenuCard'
import HistoryService from '../../service/history/HistoryService'

const Lesson: React.FC = () => {
	return (
		<div className='lesson_menu'>
			<ArrowDownIconButton color='primary' />
			<CapiHorizontalProgress percentage={0} />
			<div className='learn_menu_cards'>
				{learnMenuCards.map((e, index) => (
					<CapiLessonCardButton
						text={e.text}
						status={e.status}
						id={e.id}
						onClick={() => HistoryService.push(e.path)}
					/>
				))}
			</div>
		</div>
	)
}

export default Lesson

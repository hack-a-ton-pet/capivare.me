import React, { useState } from 'react'
import learnCards from '../../../constant/data/learnCard'
import ContentCard from '../../../component/content_card'
import SwipeableViews from 'react-swipeable-views'
import ArrowNextIconButton from '../../../component/icon_button/arrow_next'
import CapiStepper from '../../../component/stepper'
import GoBackIconButton from '../../../component/icon_button/go_back'
import LearnPathCard from '../../../component/learn_path_card'
import HistoryService from '../../../service/history/HistoryService'
import PathConstants from '../../../constant/PathConstants'
import './styles.css'

const LessonSection: React.FC = () => {
	const [index, setIndex] = useState(0)

	const handleChangeIndex = (index: number) => {
		if (index > -1 && index < learnCards.length + 1) setIndex(index)
	}

	const incrementIndex = (inc: number) => {
		handleChangeIndex(index + inc)
	}

	const handleClick = () => {
		setTimeout(() => HistoryService.push(PathConstants.QUIZ), 200)
	}

	const renderDialogs = () => {
		const array = learnCards.map((e, index) => (
			<ContentCard key={index} title={e.title} paragraphs={e.text} />
		))
		array.push(
			<LearnPathCard
				buttonText='Pratique'
				title='Você terminou!'
				description='Agora vamos praticar o que aprendemos!'
				id='section1'
				onClick={handleClick}
			/>,
		)
		return array
	}

	return (
		<div className='lesson_section'>
			<GoBackIconButton color='primary' />
			<SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
				{renderDialogs()}
			</SwipeableViews>
			<div className='stepper_menu'>
				<ArrowNextIconButton
					color='primary'
					direction='back'
					onClick={() => incrementIndex(-1)}
				/>
				<CapiStepper steps={learnCards.length + 1} current={index} />
				<ArrowNextIconButton
					color='primary'
					onClick={() => incrementIndex(1)}
				/>
			</div>
		</div>
	)
}

export default LessonSection

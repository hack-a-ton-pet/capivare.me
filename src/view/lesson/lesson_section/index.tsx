import React, { useState } from 'react'
import ContentCard from '../../../component/content_card'
import SwipeableViews from 'react-swipeable-views'
import ArrowNextIconButton from '../../../component/icon_button/arrow_next'
import CapiStepper from '../../../component/stepper'
import GoBackIconButton from '../../../component/icon_button/go_back'
import LearnPathCard from '../../../component/learn_path_card'
import HistoryService from '../../../service/history/HistoryService'
import LessonService from '../../../service/lesson/LessonService'
import PathConstants from '../../../constant/PathConstants'
import { useParams } from 'react-router-dom'
import Lesson from '../../../type/quiz/Lesson'
import './styles.css'

interface LessonSectionParam {
	id: string
}

const LessonSection: React.FC = () => {
	const { id } = useParams<LessonSectionParam>()
	const lesson = LessonService.getById(id)

	const [index, setIndex] = useState(0)

	const isValidSectionIndex = (index: number, lesson: Lesson): boolean => {
		const greaterThanMin = index >= 0
		const smallerThanMax = index <= lesson.sections.length
		return greaterThanMin && smallerThanMax
	}

	const handleChangeSection = (index: number, lesson: Lesson) => {
		if (isValidSectionIndex(index, lesson)) setIndex(index)
	}

	const handleGoNext = (lesson: Lesson) => {
		changeSectionIndex(index + 1, lesson)
	}

	const handleGoBack = (lesson: Lesson) => {
		changeSectionIndex(index - 1, lesson)
	}

	const changeSectionIndex = (newIndex: number, lesson: Lesson) => {
		if (isValidSectionIndex(newIndex, lesson)) setIndex(newIndex)
	}

	const handleClick = () => {
		setTimeout(() => HistoryService.push(`${PathConstants.QUIZ}/${id}`), 200)
	}

	const renderDialogs = (lesson: Lesson) => {
		const array = lesson.sections.map((e, index) => (
			<ContentCard key={index} title={e.title} text={e.text} />
		))
		array.push(
			<LearnPathCard
				buttonText='Pratique'
				title='Você terminou!'
				description='Agora vamos praticar o que aprendemos!'
				id='section1'
				onClick={handleClick}
				key={lesson.sections.length}
			/>,
		)
		return array
	}

	return (
		<div className='lesson_section'>
			{lesson && (
				<>
					<GoBackIconButton color='primary' />
					<SwipeableViews
						index={index}
						onChangeIndex={index => handleChangeSection(index, lesson)}
					>
						{renderDialogs(lesson)}
					</SwipeableViews>
					<div className='stepper_menu'>
						<ArrowNextIconButton
							color='primary'
							direction='back'
							onClick={() => handleGoBack(lesson)}
						/>
						<CapiStepper
							steps={lesson.sections.length + 1}
							current={index}
						/>
						<ArrowNextIconButton
							color='primary'
							onClick={() => handleGoNext(lesson)}
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default LessonSection

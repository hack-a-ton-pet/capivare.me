import React, { useState } from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'
import learnCards from '../../../constant/data/learnCard'
import ContentCard from '../../../component/content_card'
import SwipeableViews from 'react-swipeable-views'
import ArrowNextIconButton from '../../../component/icon_button/arrow_next'
import CapiStepper from '../../../component/stepper'
import GoBackIconButton from '../../../component/icon_button/go_back'

const LessonSection: React.FC = () => {
	const [index, setIndex] = useState(0)

	const handleChangeIndex = (index: number) => {
		if (index > -1 && index < learnCards.length) setIndex(index)
	}

	const incrementIndex = (inc: number) => {
		handleChangeIndex(index + inc)
	}

	return (
		<div className='lesson_section'>
			<GoBackIconButton color='primary' />
			<SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
				{learnCards.map((e, index) => (
					<ContentCard key={index} title={e.title} paragraphs={e.text} />
				))}
			</SwipeableViews>
			<div className='stepper_menu'>
				<ArrowNextIconButton
					color='primary'
					direction='back'
					onClick={() => incrementIndex(-1)}
				/>
				<CapiStepper steps={learnCards.length} current={index} />
				<ArrowNextIconButton
					color='primary'
					onClick={() => incrementIndex(1)}
				/>
			</div>
		</div>
	)
}

export default LessonSection

import React, { useState } from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'
import learnCards from '../../../constant/data/learnCard'
import ContentCard from '../../../component/content_card'
import AutoPlaySwipeableViews from 'react-swipeable-views'
import Pagination from 'react-swipeable-views'

const LessonSection: React.FC = () => {
	const { id } = useParams<{ id: string }>()

	const [index, setIndex] = useState(0)

	const handleChangeIndex = (index: number) => {
		setIndex(index)
	}

	return (
		<div className='lesson_section'>
			<AutoPlaySwipeableViews
				index={index}
				onChangeIndex={handleChangeIndex}
			>
				{learnCards.map((e, index) => (
					<ContentCard key={index} title={e.title} paragraphs={e.text} />
				))}
			</AutoPlaySwipeableViews>
		</div>
	)
}

export default LessonSection
